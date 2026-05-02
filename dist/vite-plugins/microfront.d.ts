import type { UserConfig } from "vite";
export type MicrofrontViteOptions = {
    entry: string;
    outDir?: string;
    fileName?: string;
};
export declare function defineMicrofrontConfig({ entry, outDir, fileName, }: MicrofrontViteOptions): UserConfig;
