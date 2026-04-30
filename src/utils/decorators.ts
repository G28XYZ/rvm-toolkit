import { DefinePropContext } from "../decorators/define_prop";
import { defineMetadata, getOwnMetadata } from "./index";

export type LegacyPropertyKey = string | symbol;

type PrototypeMetadata = {
  metadataKey: symbol | string;
  name: string | symbol;
};

const protoMetadataRegistry = new WeakMap<object, Map<symbol | string, Set<string>>>();

export const isLegacyPropertyDecoratorArgs = (target: unknown, propertyKey: unknown): propertyKey is LegacyPropertyKey =>
  !!target && (typeof propertyKey === "string" || typeof propertyKey === "symbol");

export const isDecoratorContext = <This, T>(context: unknown): context is DefinePropContext<This, T> | string | symbol =>
  !!context && typeof context === "object" && "kind" in context;

export const createLegacyClassContext = (name: string | symbol) =>
  ({
    kind: "class",
    name,
    addInitializer: (): void => void 0,
    metadata: {},
  }) as unknown as ClassDecoratorContext<any>;

type FieldDecoratorAdapter<This, T> = {
  defineLegacy: (target: object, name: LegacyPropertyKey) => void;
  defineStage3: (context: ClassFieldDecoratorContext<This, T>) => void;
  initializer?: (value: T) => T;
};

export const applyFieldDecorator = <This, T>(
  targetOrValue: object | undefined,
  contextOrKey: ClassFieldDecoratorContext<This, T> | string | symbol,
  adapter: FieldDecoratorAdapter<This, T>
): ClassFieldDecoratorContext<This, T> | ((value: T) => T) | void => {
  if (isLegacyPropertyDecoratorArgs(targetOrValue, contextOrKey)) {
    adapter.defineLegacy(targetOrValue, contextOrKey);
    return;
  }

  if (isDecoratorContext(contextOrKey)) {
    adapter.defineStage3(contextOrKey as ClassFieldDecoratorContext<This, T>);
    if (contextOrKey.kind === "field") return adapter.initializer;
    return contextOrKey as ClassFieldDecoratorContext<This, T>;
  }
};

export const registerPrototypeMetadata = <T extends PrototypeMetadata>(proto: object, instance: T): void => {
  if (!proto) return;

  let registryByKey = protoMetadataRegistry.get(proto);
  if (!registryByKey) {
    registryByKey = new Map();
    protoMetadataRegistry.set(proto, registryByKey);
  }

  let registry = registryByKey.get(instance.metadataKey);
  if (!registry) {
    registry = new Set();
    registryByKey.set(instance.metadataKey, registry);
  }

  const name = String(instance.name);
  if (registry.has(name)) return;

  const list = getOwnMetadata(instance.metadataKey, proto, new Array<T>());
  if (!list.some((item) => String(item.name) === name)) {
    defineMetadata(instance.metadataKey, [...list, instance], proto);
  }
  registry.add(name);
};
