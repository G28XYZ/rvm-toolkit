/**
 * Объект с доступом по строковому, числовому или symbol-ключу.
 */
type IndexedObject<TValue = unknown> = {
  [key: string]: TValue;
  [key: number]: TValue;
  [key: symbol]: TValue;
};

/**
 * Проверяет, что свойство определено непосредственно на объекте.
 *
 * @param target Объект для проверки. `null` и `undefined` считаются отсутствующим объектом.
 * @param key Ключ свойства.
 * @returns `true`, если свойство является собственным свойством объекта.
 */
export const hasOwnProperty = (target: object | null | undefined, key: PropertyKey): boolean =>
  Boolean(target) && Object.prototype.hasOwnProperty.call(target, key);

/**
 * Читает свойство объекта по произвольному ключу с типизированным результатом.
 *
 * @param target Объект, из которого нужно прочитать значение.
 * @param key Ключ свойства.
 * @returns Значение свойства, приведенное к типу `TValue`.
 */
export const getProperty = <TValue = unknown>(target: object, key: PropertyKey): TValue =>
  (target as IndexedObject<TValue>)[key];

/**
 * Записывает свойство объекта по произвольному ключу.
 *
 * @param target Объект, в который нужно записать значение.
 * @param key Ключ свойства.
 * @param value Новое значение свойства.
 */
export const setProperty = <TValue>(target: object, key: PropertyKey, value: TValue): void => {
  (target as IndexedObject<TValue>)[key] = value;
};
