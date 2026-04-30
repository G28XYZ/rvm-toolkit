import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import { action, computed, isObservable, observable, runInAction } from "mobx";
import {
  FieldMetadata,
  SubmitMetadata,
  ValidationMetadata,
  ExcludeMetadata,
  IFieldMetadata,
  ISubmitMetadata,
  IExcludeMetadata,
} from "./data";
import { ModelOptions, ModelService, TModel, IMetadataModel } from "./types";
import { EXCLUDE_METADATA_KEY, FIELD_METADATA_KEY, SUBMIT_METADATA_KEY, VALIDATION_METADATA_KEY } from "./meta";
import { getProperty, hasOwnProperty, setProperty } from "../utils/property";
import { defineModelData, defineModelFieldValue, initLegacyModelFields, initModelField } from "./field-runtime";
/** */
const submitMetadata = new SubmitMetadata();
/** */
const fieldMetadata = new FieldMetadata();
/** */
const validationMetadata = new ValidationMetadata();
/** */
const excludeMetadata = new ExcludeMetadata();
type MetaCache<T> = { ownRef: unknown; protoRef: unknown; list: T[]; map: Map<string, T> };
type MetaCacheSlot<T> = MetaCache<T> | true | null;

/**
 * Класс для управлением состоянием модели.
 */
export class Model<T extends Record<string, any> = any > implements TModel<any> {
  @observable
  // @define_prop
  protected accessor initData: Partial<T> = null;

  // @define_prop
  protected accessor committedData: Partial<T> = {};

  // @define_prop
  private accessor modified_: Partial<T> = {};

  // @define_prop
  private accessor legacyInitDone = false;

  // @define_prop
  private accessor options: ModelOptions<T> = {};

  private accessor [FIELD_METADATA_KEY]: MetaCacheSlot<IFieldMetadata<any, any>>;
  private accessor [SUBMIT_METADATA_KEY]: MetaCacheSlot<ISubmitMetadata>;
  private accessor [EXCLUDE_METADATA_KEY]: MetaCacheSlot<IExcludeMetadata>;
  private accessor [VALIDATION_METADATA_KEY]: MetaCacheSlot<IMetadataModel>;

  /**
   * Создает модель и инициализирует данные.
   */
  constructor(data: Partial<T> = {}, options?: ModelOptions<T> ) {
    this.options = options;
    this.init(data);
    this.initLegacyFields();
  }

  private getFieldMetaCache() {
    const ownRef = Reflect.getOwnMetadata(FIELD_METADATA_KEY, this);
    const proto = Object.getPrototypeOf(this);
    const protoRef = proto ? Reflect.getOwnMetadata(FIELD_METADATA_KEY, proto) : null;
    const cached = this[FIELD_METADATA_KEY];
    if (cached && cached !== true && cached.ownRef === ownRef && cached.protoRef === protoRef) return cached;

    const list = fieldMetadata.fields(this);
    const map = new Map<string, IFieldMetadata<any, any>>();
    for (const item of list) {
      map.set(String(item.name), item);
    }
    this[FIELD_METADATA_KEY] = { ownRef, protoRef, list, map };
    return this[FIELD_METADATA_KEY];
  }

  private getFieldMeta(name: string): IFieldMetadata<any, any> | undefined {
    return this.getFieldMetaCache().map.get(String(name));
  }

  private getSubmitMetaCache(): MetaCache<ISubmitMetadata> {
    const ownRef = Reflect.getOwnMetadata(SUBMIT_METADATA_KEY, this);
    const proto = Object.getPrototypeOf(this);
    const protoRef = proto ? Reflect.getOwnMetadata(SUBMIT_METADATA_KEY, proto) : null;
    const cached = this[SUBMIT_METADATA_KEY];
    if (cached && cached !== true && cached.ownRef === ownRef && cached.protoRef === protoRef) return cached;

    const list = submitMetadata.fields(this);
    const map = new Map<string, ISubmitMetadata>();
    for (const item of list) {
      map.set(String(item.name), item);
    }
    const next = { ownRef, protoRef, list, map };
    this[SUBMIT_METADATA_KEY] = next;
    return next;
  }

  private getExcludeMetaCache(): MetaCache<IExcludeMetadata> {
    const ownRef = Reflect.getOwnMetadata(EXCLUDE_METADATA_KEY, this);
    const proto = Object.getPrototypeOf(this);
    const protoRef = proto ? Reflect.getOwnMetadata(EXCLUDE_METADATA_KEY, proto) : null;
    const cached = this[EXCLUDE_METADATA_KEY];
    if (cached && cached !== true && cached.ownRef === ownRef && cached.protoRef === protoRef) return cached;

    const list = excludeMetadata.fields(this);
    const map = new Map<string, IExcludeMetadata>();
    for (const item of list) {
      map.set(String(item.name), item);
    }
    const next = { ownRef, protoRef, list, map };
    this[EXCLUDE_METADATA_KEY] = next;
    return next;
  }

  private getValidationMetaCache(): MetaCache<IMetadataModel> {
    const ownRef = Reflect.getOwnMetadata(VALIDATION_METADATA_KEY, this);
    const proto = Object.getPrototypeOf(this);
    const protoRef = proto ? Reflect.getOwnMetadata(VALIDATION_METADATA_KEY, proto) : null;
    const cached = this[VALIDATION_METADATA_KEY];
    if (cached && cached !== true && cached.ownRef === ownRef && cached.protoRef === protoRef) return cached;

    const list = validationMetadata.fields(this);
    const map = new Map<string, IMetadataModel>();
    for (const item of list) {
      map.set(String(item.name), item);
    }
    const next = { ownRef, protoRef, list, map };
    this[VALIDATION_METADATA_KEY] = next;
    return next;
  }

  /**
   * Инициализировать валидацию для поля или всех полей.
   */
  private initValidation(field?: string) {
    const validation = this.validation;
    if (field) getProperty(validation, field);
    else for (let validationKey in validation) validation[validationKey];
  }

  /**
   * Полная инициализация модели и полей.
   */
  protected init(data: Partial<T> = {}) {
    this.cloneForInit(data);
    this.defineData(this.initData);
  }

  /**
   * Инициализировать отдельное поле модели.
   */
  protected initField(field: string, options?: { skipValidation?: boolean }) {
    initModelField({
      target: this,
      initData: this.initData,
      field,
      options,
      getFieldMeta: (field) => this.getFieldMeta(field),
      defineFieldValue: (field, value, fieldInstance) => this.defineFieldValue(field, value, fieldInstance),
      initValidation: (field) => this.initValidation(field),
    });
  }

  private initLegacyFields() {
    this.legacyInitDone = initLegacyModelFields({
      target: this,
      initData: this.initData,
      fields: this.getFieldMetaCache().list,
      legacyInitDone: this.legacyInitDone,
      initField: (field, options) => this.initField(field, options),
    });
  }

  // @define_prop
  // private readonly serviceToJSON = () => this.dumpData;
  /**
   * сделать значение наблюдаемым, повесить observable в глубину
   * @param value
   * @param field
   * @param originField
   * @param changePath
   * @returns
   */
  /**
   * Сделать значение наблюдаемым с отслеживанием вложенных изменений.
   */
  private createObservable(
    value: Record<string, any>,
    field: string,
    originField: string,
    changePath = originField
  ): Record<string, any> {

    value = isObservable(value) ? value : observable.box(value);

    return new Proxy(value, {
      get: (target, p, receiver) => {
        // value = observable.box(Reflect.get(target, p, receiver));

        const curValue = Reflect.get(target, p, receiver);

        const isObj = curValue && typeof curValue === "object" && !(curValue instanceof Model);

        if (isObj && !isObservable(value)) return this.createObservable(curValue, String(p), field, `${changePath}.${String(p)}`);

        return curValue;
      },
      set: (target, p, newValue, receiver) => {
        // if(this.checkChange(originField, Reflect.get(this, originField))) return true;

        value = newValue;

        this.checkChange(originField, Reflect.get(this, originField));

        return Reflect.set(target, p, newValue, receiver);
      },
    });
  }

  /**
   * Определить getter/setter для поля модели.
   */
  protected defineFieldValue(
    field: string,
    value?: any,
    fieldInstance?: IFieldMetadata<any, any>
  ): any {
    return defineModelFieldValue({
      target: this,
      field,
      value,
      fieldInstance,
      getFieldMeta: (field) => this.getFieldMeta(field),
      checkChange: (field, value) => this.checkChange(field, value),
    });
  }

  /**
   * Сохранить исходные данные с глубоким клонированием.
   */
  private cloneForInit(data: Partial<T> = {}) {
    // TODO - clone ?
    this.initData = data;
  }

  /**
   * Проверить изменение поля и обновить modified_.
   */
  private checkChange(field: string | keyof T, value: any) {
    const originValue = hasOwnProperty(this.committedData, field)
      ? getProperty(this.committedData, field)
      : getProperty(this.initData, field);
    const isChanged = field && field in this.initData && !isEqual(originValue, value);

    runInAction(() => {
      if (isChanged) {
        setProperty(this.modified_, field, originValue);
        return;
      }
      if (field in this.modified_ && isEqual(originValue, value)) {
        delete this.modified_[field as keyof T];
      }
    });

    return isChanged;
  }

  /**
   * Применить данные к полям модели.
   */
  private defineData(data: Partial<T>) {
    defineModelData({
      target: this,
      data,
      fieldMap: this.getFieldMetaCache().map,
      initField: (field) => this.initField(field),
    });
  }

  /**
   * Признак наличия изменений.
   */
  @computed protected get dirty() {
    return !isEmpty(this.modified_);
  }

  /**
   * Зафиксировать все изменения.
   */
  @action protected commit() {
    for (let field of this.getFieldMetaCache().list) this.commitField(field.name);

    this.modified_ = {};
  }

  /**
   * Зафиксировать изменения конкретного поля.
   */
  @action protected commitField<K extends keyof T | string>(field: K) {
    if (field in this.modified_) {
      setProperty(this.committedData, field, getProperty(this, field))
    }
    delete this.modified_[field as keyof T];

    this.modified_ = { ...this.modified_ };
  }

  /**
   * Откатить изменения к последнему коммиту.
   */
  @action protected reject() {
    for (let field in this) {
      if (field in this.modified_) {
        setProperty(this, field, getProperty(this.modified_ as object, field));
        this.commitField(field);
        this.defineFieldValue(field, getProperty(this, field));
      }
    }
    this.commit();
  }

  /**
   * Вернуть модель к исходным данным.
   */
  @action protected toInit(): Model<T> {
    this.init(this.initData);
    return this;
  }

  /**
   * Перезагрузить данные модели.
   */
  protected loadData(data?: Partial<T>): Model<T> {
    this.init(data);
    return this;
  }

  /**
   * Получить сериализованный дамп данных.
   */
  protected get dumpData(): T {
    this.initLegacyFields();
    const result: T = Object.create({});

    const submitMap = this.getSubmitMetaCache().map;
    const excludeMap = this.getExcludeMetaCache().map;

    const getValue = (field: string) => {
      const value = getProperty(this, field);
      const submitInstance = submitMap.get(field);
      const callback = submitInstance?.callback;
      return typeof callback === "function" ? callback(value, this) : value;
    };

    const isExcludeField = (field: string) => {
      const excludeInstance = excludeMap.get(field);
      if (excludeInstance) {
        switch (typeof excludeInstance.callback) {
          case "boolean":  return Boolean(excludeInstance.callback);
          case "function": return excludeInstance.callback(getProperty(this, field), this);
        }
      }

      return false;
    };

    this.getFieldMetaCache().list.forEach((item) => {
      if (item.name in this) {
        // если в опциях при создании модели передали определенные поля на базе сконфигурированной модели
        // исключить поля которых нет в массиве
        if(this.options?.byFields && !this.options.byFields.includes(item.name as keyof T)) return;

        if (isExcludeField(item.name)) return;
        setProperty(result, item.name, getValue(item.name));
      }
    });

    return result;
  }

  /**
   * Получить объект результатов валидации.
   */
  @computed protected get validation() {
    this.initLegacyFields();
    const validation: Partial<T> = {};

    for (const item of this.getValidationMetaCache().list) {
      const fieldName = String(item.name);
      setProperty(validation, fieldName, item.callback(getProperty(this, fieldName), this) || "");
    }

    return validation;
  }

  /**
   * Признак валидности и наличия изменений.
   */
  @computed protected get validAndDirty() {
    return this.dirty && Object.values(this.validation).filter(Boolean).length === 0;
  }

  /**
   * Публичный API модели для вью.
   */
  private get serviceApi(): Pick<
    ModelService<T>,
    "loadData" | "reject" | "commit" | "commitField" | "toInit"
  > {
    return {
      loadData   : (data?: Partial<T>): Model<T> => this.loadData(data),
      reject     : (): void => this.reject(),
      commit     : (): void => this.commit(),
      commitField: (field: keyof T): void => this.commitField(field),
      toInit     : (): Model<T> => this.toInit(),
    }
  };

  @computed.struct public get service(): ModelService<T> {
    return {
        dirty         : this.dirty,
        dumpData      : this.dumpData,
        // toJSON        : this.serviceToJSON,
        validation    : this.validation,
        ...this.serviceApi,
    };
  }
}

export * from './types';
