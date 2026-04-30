export type EntryKind = "service" | "store";
/** Информация о сущности, найденной в исходниках. */
export type ContainerEntry = {
    className: string;
    entryKey: string;
    filePath: string;
    kind: EntryKind;
};
export declare const MVVM_MODULE = "rvm-toolkit";
