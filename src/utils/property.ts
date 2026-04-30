type IndexedObject<TValue = unknown> = {
  [key: string]: TValue;
  [key: number]: TValue;
  [key: symbol]: TValue;
};

export const hasOwnProperty = (target: object | null | undefined, key: PropertyKey): boolean =>
  Boolean(target) && Object.prototype.hasOwnProperty.call(target, key);

export const getProperty = <TValue = unknown>(target: object, key: PropertyKey): TValue =>
  (target as IndexedObject<TValue>)[key];

export const setProperty = <TValue>(target: object, key: PropertyKey, value: TValue): void => {
  (target as IndexedObject<TValue>)[key] = value;
};
