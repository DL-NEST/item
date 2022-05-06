import {ipcMain,BrowserWindow} from 'electron';
import {menuLists} from "../../../global";
import {WinPool} from "../../windows";

function winCtrlBar() {
  ipcMain.on('btn_switch', (event, args) => {
      let win = BrowserWindow.getFocusedWindow()
      switch (args) {
        case 'minimize':
          win.minimize();
          break;
        case 'close':
          BrowserWindow.getAllWindows().forEach(item => {
            item.close();
          })
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
    },
  );
}

function winMenuBar(winPool: WinPool) {
  ipcMain.on('menu_fun', (event, args) => {
    fun(args, winPool);
  })
}

function fun(name:string,winPool: WinPool) {
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

export {
  winCtrlBar,
  winMenuBar
}