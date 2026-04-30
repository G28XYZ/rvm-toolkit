import type { ContainerEntry } from "./mvvm-di-types";
type ContainerContentEntry = ContainerEntry & {
    interfaceName: string;
    entryKey: string;
};
/** Обновить содержимое container.d.ts с учетом service/store entry. */
export declare function updateContainerContent(content: string, containerPath: string, entry: ContainerContentEntry): string;
/** Сформировать имя DiServices container interface по пути контейнера. */
export declare function inferInterfaceName(containerPath: string, srcRoot: string): string;
/** Сформировать имя DiStores container interface по пути контейнера. */
export declare function inferStoresInterfaceName(containerPath: string, srcRoot: string): string;
/** Привести ключ сервиса к валидному TypeScript property key. */
export declare function formatServiceKey(value: string): string;
/** Построить относительный путь импорта без расширения. */
export declare function toImportPath(fromDir: string, filePath: string): string;
/** Экранировать строку для RegExp. */
export declare function escapeRegExp(value: string): string;
export {};
