import {TaskManager} from "@/processManage";
import {join} from "path";
import {ipcMain} from "electron";


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
            preload: join(__dirname, '../preload/index.cjs')
        },
    },(electronProcess)=>{
        electronProcess.webContents.openDevTools()
        // 数据传送
        ipcMain.on("taskManager_get", (event, arg) => {
            console.log(arg)
            console.log(taskManager.getElectronProcessByName("main"))
            electronProcess.webContents.send("taskManager_get_to",
                taskManager.getAllProcessStatus())
        })
        // 打开DevTool
        ipcMain.on("taskManager_DevTool", (event, arg) => {
            console.log(arg)
            // console.log(event)
            electronProcess.webContents.setMaxListeners(0);
        })
        // 显示Show
        ipcMain.on("taskManager_Show", (event, arg) => {
            console.log(arg)
            // console.log(event)
            electronProcess.webContents.setMaxListeners(0);
        })
        // 杀掉进程
        ipcMain.on("taskManager_Kill", (event, arg) => {
            console.log(arg)
            // console.log(event)
            electronProcess.webContents.setMaxListeners(0);
        })

    });
}

export {createTaskManager}