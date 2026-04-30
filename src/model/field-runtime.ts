import { observable, runInAction } from "mobx";
import { getProperty, hasOwnProperty, setProperty } from "../utils/property";
import type { IFieldMetadata } from "./data";

/**
 * Runtime для полей Model.
 *
 * Этот модуль держит инварианты инициализации @field:
 * - исходные данные фиксируются в initData до установки observable accessor;
 * - factory получает полный initData и instance;
 * - legacy-поля лениво доинициализируются без повторного сброса пользовательских изменений;
 * - каждое observable-поле при записи вызывает dirty tracking через checkChange.
 *
 * Публичный контракт остается в Model, а здесь находится implementation поля.
 */

type InitFieldOptions = {
  /** Не запускать validation после установки поля. Используется для legacy lazy init. */
  skipValidation?: boolean;
};

/** Параметры инициализации одного @field поля. */
type InitModelFieldConfig<T extends Record<string, any>> = {
  /** Экземпляр Model, на котором определяется поле. */
  target: object;
  /** Исходные данные модели, относительно которых считается dirty. */
  initData: Partial<T>;
  /** Имя поля, которое нужно инициализировать. */
  field: string;
  /** Опции конкретного запуска инициализации. */
  options?: InitFieldOptions;
  /** Получить metadata поля из кеша Model. */
  getFieldMeta: (field: string) => IFieldMetadata<any, any> | undefined;
  /** Определить runtime property на экземпляре Model. */
  defineFieldValue: (field: string, value?: any, fieldInstance?: IFieldMetadata<any, any>) => unknown;
  /** Инициализировать validation для поля или всех полей. */
  initValidation: (field?: string) => void;
};

/** Параметры доинициализации legacy-decorator полей. */
type InitLegacyFieldsConfig<T extends Record<string, any>> = {
  /** Экземпляр Model, где проверяются собственные class fields. */
  target: object;
  /** Исходные данные модели. Поля, уже присутствующие здесь, не трогаются. */
  initData: Partial<T>;
  /** Список @field metadata из prototype chain. */
  fields: IFieldMetadata<any, any>[];
  /** Флаг, что legacy доинициализация уже выполнена. */
  legacyInitDone: boolean;
  /** Инициализировать одно поле через обычный Model field path. */
  initField: (field: string, options?: InitFieldOptions) => void;
};

/** Параметры применения входных данных к @field полям. */
type DefineModelDataConfig<T extends Record<string, any>> = {
  /** Экземпляр Model с class fields до замены на accessors. */
  target: object;
  /** Данные, переданные в constructor/loadData. */
  data: Partial<T>;
  /** Быстрый lookup metadata по имени поля. */
  fieldMap: Map<string, IFieldMetadata<any, any>>;
  /** Инициализировать поле после записи стартового значения. */
  initField: (field: string) => void;
};

/** Параметры определения runtime property для одного поля. */
type DefineFieldValueConfig = {
  /** Экземпляр Model, на котором будет определено property. */
  target: object;
  /** Запрошенное имя поля. Используется для fallback metadata lookup. */
  field: string;
  /** Начальное значение поля. */
  value?: any;
  /** Metadata поля, если caller уже получил ее заранее. */
  fieldInstance?: IFieldMetadata<any, any>;
  /** Получить metadata поля, если fieldInstance не передан. */
  getFieldMeta: (field: string) => IFieldMetadata<any, any> | undefined;
  /** Сообщить Model, что setter поля получил новое значение. */
  checkChange: (field: string, value: any) => void;
};

/**
 * Инициализирует одно поле модели по metadata.
 *
 * Значение берется из initData, factory или текущего значения instance.
 * После установки поля запускает validation, если вызов не пришел из legacy lazy path.
 */
export function initModelField<T extends Record<string, any>>({
  defineFieldValue,
  field,
  getFieldMeta,
  initData,
  initValidation,
  options,
  target,
}: InitModelFieldConfig<T>): void {
  const fieldInstance = getFieldMeta(field);
  if (!fieldInstance) return;

  const fieldName = String(fieldInstance.name);
  const hasOwnValue = hasOwnProperty(initData, fieldName);
  if (!hasOwnValue) setProperty(initData, fieldName, getProperty(target, fieldName));

  let value = fieldInstance.factory
    ? fieldInstance.factory(initData, target)
    : getProperty(initData, fieldName);

  if (value === undefined && !fieldInstance.factory) {
    const fallback = getProperty(target, fieldName);
    if (fallback !== undefined) {
      value = fallback;
      setProperty(initData, fieldName, fallback);
    }
  }

  defineFieldValue(field, value, fieldInstance);
  if (!options?.skipValidation) initValidation(field);
}

/**
 * Доинициализирует legacy-decorator поля один раз.
 *
 * Legacy decorators могут регистрировать metadata на prototype до появления
 * stage-3 initializer. Эта функция переносит такие поля в обычный runtime,
 * не трогая поля, которые уже есть в initData.
 */
export function initLegacyModelFields<T extends Record<string, any>>({
  fields,
  initData,
  initField,
  legacyInitDone,
  target,
}: InitLegacyFieldsConfig<T>): boolean {
  if (legacyInitDone) return true;
  if (!fields.some((field) => hasOwnProperty(target, field.name))) return false;

  for (let field of fields) {
    const fieldName = String(field.name);
    if (initData && fieldName in initData) continue;
    initField(fieldName, { skipValidation: true });
  }

  return true;
}

/**
 * Применяет входные данные к собственным @field-полям instance.
 *
 * Метод намеренно проходит по own enumerable fields: так сохраняется старый
 * порядок инициализации class fields перед их заменой на observable accessors.
 */
export function defineModelData<T extends Record<string, any>>({
  data,
  fieldMap,
  initField,
  target,
}: DefineModelDataConfig<T>): void {
  for (let field in target) {
    if (!hasOwnProperty(target, field)) continue;
    if (fieldMap.has(field)) {
      setProperty(target, field, getProperty(data, field));
      initField(field);
    }
  }
}

/**
 * Определяет runtime-представление поля.
 *
 * Обычные поля становятся MobX observable box с getter/setter на instance.
 * noObserve-поля получают простое data property без dirty tracking.
 */
export function defineModelFieldValue({
  checkChange,
  field,
  fieldInstance,
  getFieldMeta,
  target,
  value,
}: DefineFieldValueConfig): any {
  const resolvedFieldInstance = fieldInstance ?? getFieldMeta(field);

  if (resolvedFieldInstance.noObserve) {
    Reflect.defineProperty(target, resolvedFieldInstance.name, { value })
  } else {
    const boxedValue = observable.box(value);

    Reflect.defineProperty(target, resolvedFieldInstance.name, {
      get: () => boxedValue.get(),
      set: (v) => {
        runInAction(() => boxedValue.set(v));
        checkChange(resolvedFieldInstance.name, boxedValue.get());
      },
      enumerable: true,
      configurable: true,
    });

    return boxedValue;
  }

  return value;
}
