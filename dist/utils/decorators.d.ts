import { DefinePropContext } from "../decorators/define_prop";
export type LegacyPropertyKey = string | symbol;
type PrototypeMetadata = {
    metadataKey: symbol | string;
    name: string | symbol;
};
export declare const isLegacyPropertyDecoratorArgs: (target: unknown, propertyKey: unknown) => propertyKey is LegacyPropertyKey;
export declare const isDecoratorContext: <This, T>(context: unknown) => context is DefinePropContext<This, T> | string | symbol;
export declare const createLegacyClassContext: (name: string | symbol) => ClassDecoratorContext<any>;
type FieldDecoratorAdapter<This, T> = {
    defineLegacy: (target: object, name: LegacyPropertyKey) => void;
    defineStage3: (context: ClassFieldDecoratorContext<This, T>) => void;
    initializer?: (value: T) => T;
};
export declare const applyFieldDecorator: <This, T>(targetOrValue: object | undefined, contextOrKey: ClassFieldDecoratorContext<This, T> | string | symbol, adapter: FieldDecoratorAdapter<This, T>) => ClassFieldDecoratorContext<This, T> | ((value: T) => T) | void;
export declare const registerPrototypeMetadata: <T extends PrototypeMetadata>(proto: object, instance: T) => void;
export {};
