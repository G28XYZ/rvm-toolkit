import { DefinePropContext } from "../decorators/define_prop";
/** Ключ свойства в legacy decorator API. */
export type LegacyPropertyKey = string | symbol;
/** Запись metadata, привязанная к prototype и ключу metadata. */
type PrototypeMetadata = {
    /** Ключ, под которым metadata хранится через Reflect metadata API. */
    metadataKey: symbol | string;
    /** Имя поля или свойства, для которого зарегистрирована metadata. */
    name: string | symbol;
};
/**
 * Проверяет аргументы legacy property decorator.
 *
 * @param target Target/prototype, переданный декоратору.
 * @param propertyKey Ключ свойства, переданный декоратору.
 * @returns `true`, если аргументы соответствуют legacy property decorator API.
 */
export declare const isLegacyPropertyDecoratorArgs: (target: unknown, propertyKey: unknown) => propertyKey is LegacyPropertyKey;
/**
 * Проверяет, что значение похоже на stage 3 decorator context.
 *
 * @param context Значение, переданное декоратору вторым аргументом.
 * @returns `true`, если значение содержит поле `kind`.
 */
export declare const isDecoratorContext: <This, T>(context: unknown) => context is DefinePropContext<This, T> | string | symbol;
/**
 * Создает минимальный class decorator context для совместимости legacy-классов с общей логикой декораторов.
 *
 * @param name Имя класса.
 * @returns Объект, совместимый с `ClassDecoratorContext`.
 */
export declare const createLegacyClassContext: (name: string | symbol) => ClassDecoratorContext<any>;
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
export declare const applyFieldDecorator: <This, T>(targetOrValue: object | undefined, contextOrKey: ClassFieldDecoratorContext<This, T> | string | symbol, adapter: FieldDecoratorAdapter<This, T>) => ClassFieldDecoratorContext<This, T> | ((value: T) => T) | void;
/**
 * Регистрирует metadata поля на prototype без дублей.
 *
 * @param proto Prototype, на котором хранится список metadata.
 * @param instance Запись metadata с `metadataKey` и `name`.
 */
export declare const registerPrototypeMetadata: <T extends PrototypeMetadata>(proto: object, instance: T) => void;
export {};
