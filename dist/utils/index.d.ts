export * from "./microfront";
/**
 * Получить metadata с учетом значения по умолчанию.
 *
 * @param metadataKey Ключ metadata.
 * @param target Объект, на котором нужно прочитать собственную metadata.
 * @param defaultValue Значение по умолчанию, если metadata не определена.
 * @returns Значение metadata или `defaultValue`.
 */
export declare const getOwnMetadata: <T, D = any>(metadataKey: symbol | string, target: T, defaultValue?: D) => D extends undefined ? T : D;
/**
 * Определить metadata на объекте.
 *
 * @param metadataKey Ключ metadata.
 * @param metadataValue Значение metadata.
 * @param target Объект, на котором нужно записать metadata.
 * @returns Результат `Reflect.defineMetadata`.
 */
export declare const defineMetadata: <V, T = any>(metadataKey: symbol | string, metadataValue: V, target: T) => void;
/**
 * Проверить, можно ли сериализовать аргументы.
 *
 * @param args Значения, которые нужно проверить через `JSON.stringify`.
 * @returns `true`, если значения можно сериализовать в JSON, иначе `false`.
 */
export declare function isSerializable(...args: any[]): boolean;
/**
 * Извлечь имя вызывающей функции из stack.
 *
 * @param stack Stack trace из `Error.stack`.
 * @returns Имя функции из третьей строки stack trace или `undefined`, если строка не найдена.
 */
export declare function getExecutingFunctionNameByStack(stack: string): string;
/**
 * Отложенная запись TODO в консоль с уникальными путями.
 *
 * @param title Заголовок TODO-записи.
 * @param msg Дополнительные данные, которые будут выведены в консоль при обращении к `path`.
 * @returns Пустой callback, который можно передать туда, где требуется функция.
 */
export declare const TODO: (title: string, ...msg: any[]) => (..._args: any[]) => void;
/**
 * Тип конструктора класса.
 *
 * @typeParam T Тип создаваемого экземпляра.
 * @typeParam A Тип аргументов конструктора.
 */
export type TInstance<T = any, A extends any[] = any[]> = new (...args: A) => T;
