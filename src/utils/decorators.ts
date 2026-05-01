import { DefinePropContext } from "../decorators/define_prop";
import { defineMetadata, getOwnMetadata } from "./index";

/** Ключ свойства в legacy decorator API. */
export type LegacyPropertyKey = string | symbol;

/** Запись metadata, привязанная к prototype и ключу metadata. */
type PrototypeMetadata = {
  /** Ключ, под которым metadata хранится через Reflect metadata API. */
  metadataKey: symbol | string;
  /** Имя поля или свойства, для которого зарегистрирована metadata. */
  name: string | symbol;
};

const protoMetadataRegistry = new WeakMap<object, Map<symbol | string, Set<string>>>();

/**
 * Проверяет аргументы legacy property decorator.
 *
 * @param target Target/prototype, переданный декоратору.
 * @param propertyKey Ключ свойства, переданный декоратору.
 * @returns `true`, если аргументы соответствуют legacy property decorator API.
 */
export const isLegacyPropertyDecoratorArgs = (target: unknown, propertyKey: unknown): propertyKey is LegacyPropertyKey =>
  !!target && (typeof propertyKey === "string" || typeof propertyKey === "symbol");

/**
 * Проверяет, что значение похоже на stage 3 decorator context.
 *
 * @param context Значение, переданное декоратору вторым аргументом.
 * @returns `true`, если значение содержит поле `kind`.
 */
export const isDecoratorContext = <This, T>(context: unknown): context is DefinePropContext<This, T> | string | symbol =>
  !!context && typeof context === "object" && "kind" in context;

/**
 * Создает минимальный class decorator context для совместимости legacy-классов с общей логикой декораторов.
 *
 * @param name Имя класса.
 * @returns Объект, совместимый с `ClassDecoratorContext`.
 */
export const createLegacyClassContext = (name: string | symbol) =>
  ({
    kind: "class",
    name,
    addInitializer: (): void => void 0,
    metadata: {},
  }) as unknown as ClassDecoratorContext<any>;

type FieldDecoratorAdapter<This, T> = {
  /** Обработчик legacy decorator API: `(target, propertyKey)`. */
  defineLegacy: (target: object, name: LegacyPropertyKey) => void;
  /** Обработчик stage 3 decorator context. */
  defineStage3: (context: ClassFieldDecoratorContext<This, T>) => void;
  /** Опциональный initializer для stage 3 field decorator. */
  initializer?: (value: T) => T;
};

/**
 * Применяет field decorator через единый adapter для legacy и stage 3 decorator API.
 *
 * @param targetOrValue Target legacy-декоратора или значение stage 3 декоратора.
 * @param contextOrKey Stage 3 context или legacy property key.
 * @param adapter Набор обработчиков для legacy/stage 3 режимов.
 * @returns Initializer/context для stage 3 или `void` для legacy-режима.
 */
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

/**
 * Регистрирует metadata поля на prototype без дублей.
 *
 * @param proto Prototype, на котором хранится список metadata.
 * @param instance Запись metadata с `metadataKey` и `name`.
 */
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
