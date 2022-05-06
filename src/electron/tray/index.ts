import { app, BrowserWindow, Menu, Tray, shell, Notification } from "electron";
import {WinPool} from "../windows";
import {sendNotification} from "../Notification";

function SignTray(iconPath: string, win: WinPool) {
  let tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "关于项目",
      type: "normal",
      click: () => {
        shell.openExternal("https://github.com/DL-NEST").then((r) => {});
      },
    },
    {
      label: "检测更新",
      type: "normal",
      click: () => {
        sendNotification({title: "检测更新", body: "没有更新"});
      },
    },
    {
      label: "Item2",
      type: "separator",
      click: () => {},
    },
    {
      label: "重新加载",
      type: "normal",
      click: () => {
        win.getMain().reload();
        win.getMain().show();
      },
    },
    {
      label: "退出",
      type: "normal",
      click: () => {
        win.closeAll()
      },
    },
  ]);
  tray.setToolTip("item\n版本号：0.1.0\n作者：dl-nest");
  tray.setContextMenu(contextMenu);
  tray.on("click", () => {
    win.getMain().show();
  });
}

export { SignTray };
