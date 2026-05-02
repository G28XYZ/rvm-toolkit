import type { UserConfig } from "vite";

import { mvvmServiceDiPlugin } from "./mvvm-di";

export type MicrofrontSharedConfig = Record<string, { singleton?: boolean; requiredVersion?: string | false }>;

export const microfrontShared: MicrofrontSharedConfig = {
  "rvm-toolkit": {
    singleton: true,
    requiredVersion: false,
  },
};

export type MicrofrontViteOptions = {
  entry: string;
  outDir?: string;
  fileName?: string;
  shared?: MicrofrontSharedConfig;
};

export function defineMicrofrontConfig({
  entry,
  outDir = "dist",
  fileName = "microfront.js",
  shared = microfrontShared,
}: MicrofrontViteOptions): UserConfig {
  const sharedPackages = Object.keys(shared);

  return {
    plugins: [mvvmServiceDiPlugin()],
    resolve: {
      dedupe: sharedPackages,
    },
    optimizeDeps: {
      include: sharedPackages,
    },
    server: {
      strictPort: true,
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    preview: {
      strictPort: true,
      cors: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    build: {
      outDir,
      emptyOutDir: true,
      lib: {
        entry,
        formats: ["es"],
        fileName: () => fileName,
      },
    },
  };
}
