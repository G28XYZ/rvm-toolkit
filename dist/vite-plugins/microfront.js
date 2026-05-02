import { mvvmServiceDiPlugin as s } from "./mvvm-di.js";
const n = {
  "rvm-toolkit": {
    singleton: !0,
    requiredVersion: !1
  }
};
function l({ entry: r, outDir: t = "dist", fileName: i = "microfront.js", shared: o = n }) {
  const e = Object.keys(o);
  return {
    plugins: [s()],
    resolve: {
      dedupe: e
    },
    optimizeDeps: {
      include: e
    },
    server: {
      strictPort: !0,
      cors: !0,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    preview: {
      strictPort: !0,
      cors: !0,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    build: {
      outDir: t,
      emptyOutDir: !0,
      lib: {
        entry: r,
        formats: ["es"],
        fileName: () => i
      }
    }
  };
}
export {
  l as defineMicrofrontConfig,
  n as microfrontShared
};
