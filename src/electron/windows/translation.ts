import {TaskManager} from "@/processManage";
import {join} from "path";

function createTranslation(taskManager: TaskManager) {
    taskManager.createElectronProcess("translation", "/translation",{
        maxWidth: 710,
        minHeight: 440,
        height: 440,
        maxHeight: 700,
        title: "翻译",
        icon: join(__dirname, "../../public/favicon.png"),
        autoHideMenuBar: true, // 隐藏控制栏
        alwaysOnTop: true, // 窗口置顶
        frame: false, // 隐藏边框
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: join(__dirname, '../preload/index.cjs')
        },
    },(electronProcess)=>{
        // 只能注册一次性的ipc
    });
}

export {createTranslation}