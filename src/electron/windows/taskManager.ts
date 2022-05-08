import {TaskManager} from "@/processManage";
import {join} from "path";
import {ipcMain,BrowserWindow} from "electron";


function createTaskManager(taskManager: TaskManager) {
    taskManager.createElectronProcess("taskManager", "/taskManager",{
        width: 600,
        height: 500,
        title: "任务管理器",
        icon: join(__dirname, "../../public/favicon.png"),
        autoHideMenuBar: true, // 隐藏控制栏
        alwaysOnTop: true, // 窗口置顶
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            // preload: join(__dirname, '../preload/index.cjs')
        },
    },(electronProcess)=>{
        // 只能注册一次性的ipc
    });
}

export {createTaskManager}