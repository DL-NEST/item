import { release } from "os";
import {app, BrowserWindow, ipcMain, Notification, Tray} from "electron";
import { join } from "path";
import { SignTray } from "./tray";
import { SignShortcut } from "./globalShortcut";
import {SignIpc} from "./ipc";
import {SignMenu} from "./menu";
import {WinPool} from "./windows";
import {sendNotification} from "./Notification";

// 禁用GPU加速 in Windows 7
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// 设置Windows 10+通知的应用程序名称
if (process.platform === "win32") app.setAppUserModelId(app.getName());


process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

let icon = join(__dirname, "../../public/favicon.png");
// 窗口的管理
let winPool = null;

function createWindow() {
  winPool = new WinPool(new BrowserWindow({
    title: 'main',
    width: 1055,
    height: 710,
    icon: icon,
    frame: false, // 无边框
    // resizable: false, // 窗口不可以调整大小
    // autoHideMenuBar: true, // 隐藏控制栏
    titleBarStyle: "hidden", // 隐藏标题栏
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      webSecurity: true,
      webgl: true,
      preload: join(__dirname, '../preload/index.cjs')
    },
  }));
  winPool.main.on("ready-to-show", () => {
    winPool.main?.show();
  });
  if (app.isPackaged) {
    winPool.main.loadFile(join(__dirname, "../render/index.html")).then((r) => {
      console.log("PRO_MODE");
    });
  } else {
    winPool.main.loadURL("http://localhost:3000").then((r) => {
      console.log("TEST_MODE");
    });
  }
}

// app准备之前
app.whenReady().then(() => {
  createWindow();
  // 注册托盘
  SignTray(icon, winPool);
  // 全局快捷键
  SignShortcut(winPool.main);
  // 注册ipc
  SignIpc(winPool);
  // 注册菜单
  SignMenu(winPool);

});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// app 准备好了
app.on("ready", () => {

});

// app 关闭
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
