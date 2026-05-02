import type { UserConfig } from "vite";

import { mvvmServiceDiPlugin } from "./mvvm-di";

export type MicrofrontViteOptions = {
  entry: string;
  outDir?: string;
  fileName?: string;
};

export function defineMicrofrontConfig({
  entry,
  outDir = "dist",
  fileName = "microfront.js",
}: MicrofrontViteOptions): UserConfig {
  return {
    plugins: [mvvmServiceDiPlugin()],
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
