/**
 * Проверяет, что свойство определено непосредственно на объекте.
 *
 * @param target Объект для проверки. `null` и `undefined` считаются отсутствующим объектом.
 * @param key Ключ свойства.
 * @returns `true`, если свойство является собственным свойством объекта.
 */
export declare const hasOwnProperty: (target: object | null | undefined, key: PropertyKey) => boolean;
/**
 * Читает свойство объекта по произвольному ключу с типизированным результатом.
 *
 * @param target Объект, из которого нужно прочитать значение.
 * @param key Ключ свойства.
 * @returns Значение свойства, приведенное к типу `TValue`.
 */
export declare const getProperty: <TValue = unknown>(target: object, key: PropertyKey) => TValue;
/**
 * Записывает свойство объекта по произвольному ключу.
 *
 * @param target Объект, в который нужно записать значение.
 * @param key Ключ свойства.
 * @param value Новое значение свойства.
 */
export declare const setProperty: <TValue>(target: object, key: PropertyKey, value: TValue) => void;
