import {build as electronBuild} from 'electron-builder'
import {build} from "vite";

await build({configFile: "src/render/vite.config.ts"});
await build({configFile: "src/electron/vite.config.ts"});

electronBuild({
    config: {
        icon: "./public/favicon.ico",
        asar: true,
        productName: "item",
        appId: "com.electron.item",
        directories: {
            output: "./dist_electron"
        },
        files: ["dist/**/*","public/**/*"],
        nsis: {
            oneClick: false,
            perMachine: false,
            allowToChangeInstallationDirectory: true,
            deleteAppDataOnUninstall: false,
        },
        win: {
            target: [
                {
                    target: "nsis",
                    arch: ["x64"]
                }
            ]
        }
    }
}).then(r => console.log(r))