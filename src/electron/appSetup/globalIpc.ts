import {ipcMain,BrowserWindow} from 'electron';
import {menuLists} from "../../global";


export function SetupGlobalIpc() {
    winCtrlBar();
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