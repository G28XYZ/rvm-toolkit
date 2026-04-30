import type { ContainerEntry } from "./mvvm-di-types";
type ContainerContentEntry = ContainerEntry & {
    /** Имя container interface, куда нужно добавить entry. */
    interfaceName: string;
    /** Уже отформатированный TypeScript property key. */
    entryKey: string;
};
/**
 * Обновить текст container.d.ts с учетом одного service/store entry.
 *
 * Функция не работает с файловой системой: она только добавляет недостающий
 * import, создает interface при его отсутствии и синхронизирует строку entry
 * внутри уже существующего interface.
 *
 * @param content Текущее содержимое container.d.ts.
 * @param containerPath Абсолютный путь к container.d.ts, нужен для import path.
 * @param entry Описание класса и целевого interface в container.d.ts.
 * @returns Обновленный текст container.d.ts.
 */
export declare function updateContainerContent(content: string, containerPath: string, entry: ContainerContentEntry): string;
/**
 * Сформировать имя service container interface по пути container.d.ts.
 *
 * @param containerPath Абсолютный путь к container.d.ts.
 * @param srcRoot Абсолютный путь к src root проекта.
 * @returns Имя interface для entries, которые расширяют DiServices.
 */
export declare function inferInterfaceName(containerPath: string, srcRoot: string): string;
/**
 * Сформировать имя store container interface по пути container.d.ts.
 *
 * @param containerPath Абсолютный путь к container.d.ts.
 * @param srcRoot Абсолютный путь к src root проекта.
 * @returns Имя interface для entries, которые расширяют DiStores.
 */
export declare function inferStoresInterfaceName(containerPath: string, srcRoot: string): string;
/**
 * Привести DI key к валидному TypeScript property key.
 *
 * @param value Исходный DI key из декоратора или имени класса.
 * @returns Identifier без кавычек или JSON string literal для сложного ключа.
 */
export declare function formatServiceKey(value: string): string;
/**
 * Построить относительный путь import без TypeScript extension.
 *
 * @param fromDir Директория файла, в котором будет стоять import.
 * @param filePath Абсолютный путь к импортируемому файлу.
 * @returns Относительный module specifier, начинающийся с ".".
 */
export declare function toImportPath(fromDir: string, filePath: string): string;
/**
 * Экранировать строку для безопасной вставки в RegExp.
 *
 * @param value Строка, которая должна сравниваться как literal.
 * @returns RegExp-safe строка.
 */
export declare function escapeRegExp(value: string): string;
export {};
