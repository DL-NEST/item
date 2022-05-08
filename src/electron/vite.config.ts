import { defineConfig } from "vite";
import { builtinModules } from "module";
import * as path from "path";
const pkg = require("../../package.json");


export default defineConfig({
  root: "src/electron",
  build: {
    outDir: "../../dist/main",
    emptyOutDir: true,
    minify: process.env.NODE_ENV === "production",
    sourcemap: true,
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
  resolve: {
    alias: [
      {
        find:'@',
        replacement: path.resolve(__dirname, './'),
      },
    ],
  },
});
