/** Тип DI entry, который определяет целевой root interface в декларациях. */
export type EntryKind = "service" | "store";
/** Информация о DI-сущности, найденной в исходниках. */
export type ContainerEntry = {
    /** Имя класса, отмеченного @Service или @Store. */
    className: string;
    /** Ключ, под которым класс должен быть доступен в DI container. */
    entryKey: string;
    /** Абсолютный путь к файлу, где объявлен класс. */
    filePath: string;
    /** Категория entry: service попадает в DiServices, store - в DiStores. */
    kind: EntryKind;
};
/** Имя public module, в который plugin добавляет declaration merging. */
export declare const MVVM_MODULE = "rvm-toolkit";
