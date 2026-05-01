export * from "./microfront";

/**
 * Получить metadata с учетом значения по умолчанию.
 *
 * @param metadataKey Ключ metadata.
 * @param target Объект, на котором нужно прочитать собственную metadata.
 * @param defaultValue Значение по умолчанию, если metadata не определена.
 * @returns Значение metadata или `defaultValue`.
 */
export const getOwnMetadata = <T, D = any>(metadataKey: symbol | string, target: T, defaultValue?: D): D extends undefined ? T : D => {
  return Reflect.getOwnMetadata(metadataKey, target as object) || defaultValue || {};
};
/**
 * Определить metadata на объекте.
 *
 * @param metadataKey Ключ metadata.
 * @param metadataValue Значение metadata.
 * @param target Объект, на котором нужно записать metadata.
 * @returns Результат `Reflect.defineMetadata`.
 */
export const defineMetadata = <V, T = any>(metadataKey: symbol | string, metadataValue: V, target: T) =>
  Reflect.defineMetadata(metadataKey, metadataValue, target as object);

/**
 * Проверить, можно ли сериализовать аргументы.
 *
 * @param args Значения, которые нужно проверить через `JSON.stringify`.
 * @returns `true`, если значения можно сериализовать в JSON, иначе `false`.
 */
export function isSerializable(...args: any[]) {
  try {
    JSON.stringify(args);
    return true;
  } catch {
    return false;
  }
}

/**
 * Извлечь имя вызывающей функции из stack.
 *
 * @param stack Stack trace из `Error.stack`.
 * @returns Имя функции из третьей строки stack trace или `undefined`, если строка не найдена.
 */
export function getExecutingFunctionNameByStack(stack: string) {
  if (stack && typeof stack === "string") {
    let [match] =
      stack
        .split("\n")[2]
        .replace(/at (get)?/, "")
        .match(/.*/g) || [];

    if (match) match = match.trim();

    return match;
  }
}

const TODOS = {};
const _TODOS: string[] = [];
let isInitTodo = false;

/**
 * Отложенная запись TODO в консоль с уникальными путями.
 *
 * @param title Заголовок TODO-записи.
 * @param msg Дополнительные данные, которые будут выведены в консоль при обращении к `path`.
 * @returns Пустой callback, который можно передать туда, где требуется функция.
 */
export const TODO = (title: string, ...msg: any[]) => {
  const stack = new Error().stack;
  if(!isInitTodo) {
    console.log(`%c TODO`, "background: #222; color: #bada55", TODOS);
    isInitTodo = true;
  } else {
    const path = getExecutingFunctionNameByStack(stack)
    if(_TODOS.includes(path) === false) {
      _TODOS.push(path);
      Reflect.set(TODOS, `${_TODOS.length}) ${title}`, { msg, get path() { console.info(msg, path); return path } });
    }
  }
  function callback(..._args: any[]) {}

  return callback;
};

/**
 * Тип конструктора класса.
 *
 * @typeParam T Тип создаваемого экземпляра.
 * @typeParam A Тип аргументов конструктора.
 */
export type TInstance<T = any, A extends any[] = any[]> = new (...args: A) => T;
