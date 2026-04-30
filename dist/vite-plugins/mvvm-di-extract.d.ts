import { type ContainerEntry } from "./mvvm-di-types";
/**
 * Извлечь Service/Store entries из одного TypeScript source file.
 *
 * Функция сканирует только один файл: находит локальные aliases импортов
 * Service/Store из rvm-toolkit, затем читает decorators у class declarations.
 * Для ключа декоратора поддерживаются string literals, template strings,
 * конкатенация строк и const identifiers, включая imported const.
 *
 * @param filePath Абсолютный путь к .ts/.tsx файлу, который нужно просканировать.
 * @returns Найденные DI entries для последующего обновления container.d.ts.
 */
export declare function extractEntries(filePath: string): Promise<ContainerEntry[]>;
