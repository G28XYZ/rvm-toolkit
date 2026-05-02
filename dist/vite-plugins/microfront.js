import { mvvmServiceDiPlugin as i } from "./mvvm-di.js";
function s({ entry: r, outDir: e = "dist", fileName: t = "microfront.js" }) {
  return {
    plugins: [i()],
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
      outDir: e,
      emptyOutDir: !0,
      lib: {
        entry: r,
        formats: ["es"],
        fileName: () => t
      }
    }
  };
}
export {
  s as defineMicrofrontConfig
};
