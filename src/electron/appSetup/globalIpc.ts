import {ipcMain, BrowserWindow, shell} from 'electron';
import {menuLists} from "../../global";
import {TaskManager} from "@/processManage";


export function SetupGlobalIpc(taskManager:TaskManager) {
    winCtrlBar();

    // 数据传送
    ipcMain.on("taskManager_get", (event, arg) => {
        event.sender.send("taskManager_get_to",
            taskManager.getAllProcessStatus())
    })
    // 打开DevTool
    ipcMain.on("taskManager_func", (event, arg) => {
        // console.log(arg.funcName)
        // console.log(arg.processName)
        switch (arg.funcName) {
            case "DevTool":
                taskManager.getElectronProcessByName(arg.processName).webContents.openDevTools()
                break;
            case "IpcLog":
                // console.log(taskManager.getElectronProcessByName(arg.processName))
                break;
            case "Show":
                taskManager.getElectronProcessByName(arg.processName).show()
                break;
            case "Kill":
                taskManager.getElectronProcessByName(arg.processName).close()
                break;
        }
    })
    ipcMain.on("MainDevTool", (event, arg) => {
        // 打开DevTool工具
        shell.openPath('chrome.exe').then((r) => {});
    })

}

function winCtrlBar() {
    ipcMain.on('btn_switch', (event, args) => {
        let win = BrowserWindow.getFocusedWindow();
        if (win) {
            switch (args) {
                case 'minimize':
                    win.minimize();
                    break;
                case 'close':
                    win.close();
                    break;
                case 'maximize':
                    if (win.isMaximized()) {
                        win.unmaximize();
                    } else {
                        win.maximize();
                    }
                    break;
                case 'fix':
                    win.setAlwaysOnTop(!win.isAlwaysOnTop(), 'floating');
                    break;
            }
        }
    });
}

function winMenuBar(winPool: BrowserWindow) {
    ipcMain.on('menu_fun', (event, args) => {
        fun(args, winPool);
    })
}

function fun(name:string,winPool: BrowserWindow) {
    menuLists.forEach(itemList => {
        itemList.subList.forEach(item =>{
            item.forEach(it=>{
                if (it.name === name) {
                    if (it.click){
                        it.click(winPool);
                    }
                    return
                }
            })
        })
    })
}
