import type { ExtensionHostContext } from "./types";
export type MicrofrontApiScope = "libvirt" | "system";
export declare class MicrofrontApiClient {
    private context;
    setContext(context: ExtensionHostContext): void;
    getJson<TData>(scope: MicrofrontApiScope, path: string): Promise<TData>;
    getLibvirtJson<TData>(path: string): Promise<TData>;
    getSystemJson<TData>(path: string): Promise<TData>;
    private getBaseUrl;
}
