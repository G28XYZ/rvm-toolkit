import type { ExtensionHostContext, MicrofrontResponse } from "./types";

export type MicrofrontApiScope = "libvirt" | "system";

export class MicrofrontApiClient {
  private context: ExtensionHostContext | null = null;

  setContext(context: ExtensionHostContext) {
    this.context = context;
  }

  async getJson<TData>(scope: MicrofrontApiScope, path: string): Promise<TData> {
    const response = await fetch(`${this.getBaseUrl(scope)}${path}`, {
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status}: ${text || response.statusText}`);
    }

    const payload = await response.json() as MicrofrontResponse<TData>;
    if (payload.success === false) {
      throw new Error(String(payload.errors?.[0] || "Microfront API request failed"));
    }

    return payload.data ?? ([] as TData);
  }

  getLibvirtJson<TData>(path: string) {
    return this.getJson<TData>("libvirt", path);
  }

  getSystemJson<TData>(path: string) {
    return this.getJson<TData>("system", path);
  }

  private getBaseUrl(scope: MicrofrontApiScope) {
    if (!this.context) {
      throw new Error("Microfront host context is not initialized");
    }

    return scope === "libvirt"
      ? this.context.api.libvirtBaseUrl
      : this.context.api.systemBaseUrl;
  }
}
