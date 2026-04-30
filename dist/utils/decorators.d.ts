import { DefinePropContext } from "../decorators/define_prop";
export type LegacyPropertyKey = string | symbol;
type PrototypeMetadata = {
    metadataKey: symbol | string;
    name: string | symbol;
};
export declare const isLegacyPropertyDecoratorArgs: (target: unknown, propertyKey: unknown) => propertyKey is LegacyPropertyKey;
export declare const isDecoratorContext: <This, T>(context: unknown) => context is DefinePropContext<This, T> | string | symbol;
export declare const createLegacyClassContext: (name: string | symbol) => ClassDecoratorContext<any>;
export declare const registerPrototypeMetadata: <T extends PrototypeMetadata>(proto: object, instance: T) => void;
export {};
