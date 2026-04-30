import { observer } from "mobx-react";
import { GetService } from "../typedi";
import type { DiServices, InjectType } from "../typedi";
import { defineMetadata, TInstance } from "../utils";
import { PropFromViewMetadata } from "../model/data";
import { ReactElement, isValidElement, useEffect, useMemo } from "react";

const propFromViewMetadata = new PropFromViewMetadata();

const isDomNode = (value: unknown): boolean => {
  return typeof Node !== "undefined" && value instanceof Node;
};

const isPropFromViewValueAllowed = (value: unknown): boolean => {
  if (value == null) return true;

  const valueType = typeof value;
  if (valueType === "function") return false;
  if (valueType !== "object") return true;

  if (isValidElement(value)) return false;
  return !isDomNode(value);
};

const assertPropFromViewValue = (prop: string, value: unknown) => {
  if (!isPropFromViewValueAllowed(value)) {
    throw new TypeError(
      `PropFromView only accepts object or primitive values; functions, React elements, and DOM nodes are not allowed for prop "${prop}".`
    );
  }
};

/** Тип пропсов для view-обертки. */
type Props<T extends TInstance, U, P extends "Partial" = undefined> = U &
  (P extends "Partial" ? { viewModel?: InstanceType<T> } : { viewModel: InstanceType<T> });

type ViewPropsByKey<K extends keyof DiServices, U> = U & { viewModel?: InjectType<K> };
type ViewPropsByClass<T extends TInstance, U> = U & { viewModel?: InstanceType<T> };

/**
 * Обертка над компонентом с инстансом ViewModel.
 */
export function view<K extends keyof DiServices, U = {}>(
  vm: K,
  reactComponent: (props: ViewPropsByKey<K, U>) => ReactElement
): (props?: U & { viewModel?: InjectType<K> }) => ReactElement;
export function view<T extends TInstance, U = {}>(
  vm: T,
  reactComponent: (props: ViewPropsByClass<T, U>) => ReactElement
): (props?: U & { viewModel?: InstanceType<T> }) => ReactElement;
export function view<U, T extends TInstance = TInstance>(
  vm: T | string,
  reactComponent: (props?: Props<T, U>) => ReactElement
) {
  return observer((props: Props<T, U, 'Partial'> = {} as any) => {
    const { viewModel: propViewModel, ...viewProps } = props;
    const { instance } = useMemo(() => {
      const service = typeof vm === "string" ? GetService(vm) : GetService(vm);
      const resolved = service || (typeof vm !== "string" ? { instance: new vm() } : undefined);
      const instance = resolved?.instance;
      return { instance };
    }, [vm]);
    const activeInstance = propViewModel ?? instance;

    useEffect(() => {
      if (!activeInstance) return;
      if (typeof activeInstance.onInit === "function") activeInstance.onInit();
      return () => {
        if (typeof activeInstance.onDispose === "function") activeInstance.onDispose();
      };
    }, [activeInstance]);

    if (activeInstance) {
      const propsFromView = propFromViewMetadata.fields(activeInstance);
      const resolvedPropsFromView =
        propsFromView.length > 0 ? propsFromView : propFromViewMetadata.fields(Object.getPrototypeOf(activeInstance));
      for (const prop in viewProps) {
        if (resolvedPropsFromView instanceof Array) {
          const propMetadata = resolvedPropsFromView.find((item) => item.name === prop);
          if (propMetadata) {
            const propValue = Reflect.get(viewProps, prop);
            assertPropFromViewValue(prop, propValue);
            Reflect.set(activeInstance, propMetadata.originName, propValue);
          }
        }
      }
      defineMetadata(propFromViewMetadata.metadataKey, resolvedPropsFromView, activeInstance);
      return reactComponent({ ...viewProps, viewModel: activeInstance } as Props<T, U>);
    }

    return reactComponent({ ...viewProps } as any);
  });
}

export * from './types';
