import {ipcMain,BrowserWindow} from 'electron';
import {WinPool} from "../../windows";
import {join} from "path";



function ctrl_win(winPool: WinPool) {
    ipcMain.on('windows', (event, args) => {
        winPool.createChild(args.name,'http://localhost:3000/#/taskManager',{
            icon: join(__dirname, "../../public/favicon.png"),
            title: args.title,
            width: args.width,
            height: args.height,
            autoHideMenuBar: true, // 隐藏控制栏
            // parent: winPool.main,
            modal: args.model,
            alwaysOnTop: args.alwaysOnTop
        });
    })
}

export {ctrl_win}