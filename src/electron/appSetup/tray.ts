import { Menu, Tray, shell } from "electron";
import {sendNotification} from "../appSetup";
import {TaskManager} from "../processManage";
import {join} from "path";

function createTray(taskManager: TaskManager, tray:Tray) {
  tray = new Tray(join(__dirname, "../../public/favicon.png"));
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
        taskManager.getMainElectron().reload();
      },
    },
    {
      label: "退出",
      type: "normal",
      click: () => {
        taskManager.exitAllTaskProcess();
      },
    },
  ]);
  tray.setToolTip("item\n版本号：0.1.0\n作者：dl-nest");
  tray.setContextMenu(contextMenu);
  tray.on("click", () => {
    taskManager.getMainElectron().show();
  });
}

export { createTray };
