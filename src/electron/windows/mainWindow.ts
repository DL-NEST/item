import {join} from "path";
import {TaskManager} from "@/processManage";
import {ipcMain} from "electron";

export function createWindow(taskManager: TaskManager) {
    taskManager.createElectronProcess("main", "/",{
        width: 1055,
        height: 710,
        icon: join(__dirname, "../../public/favicon.png"),
        frame: false, // 无边框
        // autoHideMenuBar: true, // 隐藏控制栏
        titleBarStyle: "hidden", // 隐藏标题栏
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            webSecurity: true,
            webgl: true,
            preload: join(__dirname, '../preload/index.cjs')
        },
    },()=>{
        ipcMain.on('btn_switch', (event, args) => {
                if (args === "closeAll") {
                    taskManager.exitAllTaskProcess();
                }
            },
        );
    });
}