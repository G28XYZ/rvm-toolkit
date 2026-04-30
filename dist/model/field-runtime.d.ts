import type { IFieldMetadata } from "./data";
type InitFieldOptions = {
    skipValidation?: boolean;
};
type InitModelFieldConfig<T extends Record<string, any>> = {
    target: object;
    initData: Partial<T>;
    field: string;
    options?: InitFieldOptions;
    getFieldMeta: (field: string) => IFieldMetadata<any, any> | undefined;
    defineFieldValue: (field: string, value?: any, fieldInstance?: IFieldMetadata<any, any>) => unknown;
    initValidation: (field?: string) => void;
};
type InitLegacyFieldsConfig<T extends Record<string, any>> = {
    target: object;
    initData: Partial<T>;
    fields: IFieldMetadata<any, any>[];
    legacyInitDone: boolean;
    initField: (field: string, options?: InitFieldOptions) => void;
};
type DefineModelDataConfig<T extends Record<string, any>> = {
    target: object;
    data: Partial<T>;
    fieldMap: Map<string, IFieldMetadata<any, any>>;
    initField: (field: string) => void;
};
type DefineFieldValueConfig = {
    target: object;
    field: string;
    value?: any;
    fieldInstance?: IFieldMetadata<any, any>;
    getFieldMeta: (field: string) => IFieldMetadata<any, any> | undefined;
    checkChange: (field: string, value: any) => void;
};
export declare function initModelField<T extends Record<string, any>>({ defineFieldValue, field, getFieldMeta, initData, initValidation, options, target, }: InitModelFieldConfig<T>): void;
export declare function initLegacyModelFields<T extends Record<string, any>>({ fields, initData, initField, legacyInitDone, target, }: InitLegacyFieldsConfig<T>): boolean;
export declare function defineModelData<T extends Record<string, any>>({ data, fieldMap, initField, target, }: DefineModelDataConfig<T>): void;
export declare function defineModelFieldValue({ checkChange, field, fieldInstance, getFieldMeta, target, value, }: DefineFieldValueConfig): any;
export {};
