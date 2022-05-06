import { defineConfig } from "vite";
import { builtinModules } from "module";
import pkg from "../../package.json";


export default defineConfig({
  root: "src/electron",
  build: {
    outDir: "../../dist/main",
    emptyOutDir: true,
    minify: process.env.NODE_ENV === "production",
    sourcemap: false,
    lib: {
      entry: "main.ts",
      formats: ["cjs"],
      fileName: () => "[name].cjs",
    },
    rollupOptions: {
      external: [
        "electron",
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
});
