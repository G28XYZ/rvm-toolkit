import type { UserConfig } from "vite";
export type MicrofrontSharedConfig = Record<string, {
    singleton?: boolean;
    requiredVersion?: string | false;
}>;
export declare const microfrontShared: MicrofrontSharedConfig;
export type MicrofrontViteOptions = {
    entry: string;
    outDir?: string;
    fileName?: string;
    shared?: MicrofrontSharedConfig;
};
export declare function defineMicrofrontConfig({ entry, outDir, fileName, shared, }: MicrofrontViteOptions): UserConfig;
