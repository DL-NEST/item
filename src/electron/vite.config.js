import { defineConfig } from "vite";
import { builtinModules } from "module";
import pkg from "../../package.json";
/** node.js builtins module */
const builtins = () => builtinModules.filter((x) => !/^_|^(internal|v8|node-inspect)\/|\//.test(x));
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
                ...builtins(),
                ...Object.keys(pkg.dependencies || {}),
            ],
        },
    },
});
//# sourceMappingURL=vite.config.js.map