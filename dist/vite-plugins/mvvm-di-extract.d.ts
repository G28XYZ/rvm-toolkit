import { type ContainerEntry } from "./mvvm-di-types";
/** Извлечь Service/Store entries из одного TypeScript source file. */
export declare function extractEntries(filePath: string): Promise<ContainerEntry[]>;
