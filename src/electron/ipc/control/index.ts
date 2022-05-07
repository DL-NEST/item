import {ipcMain,BrowserWindow} from 'electron';
import {menuLists} from "../../../global";
import {WinPool} from "../../windows";



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
  winMenuBar
}