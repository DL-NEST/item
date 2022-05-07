import {app, BrowserWindow, Tray,globalShortcut} from "electron";
import {createTaskManager, createWindow} from "./windows";
import {TaskManager} from "./processManage";
import {InitAppConf, createTray, SetupGlobalIpc} from "./appSetup";

// 窗口的管理
let taskManager = new TaskManager()
let tray:Tray | undefined = undefined

// 初始化app配置
InitAppConf()

// app准备完成
app.whenReady().then(async () => {
  // 创建主窗口
  await createWindow(taskManager);
  // 全局快捷键
  SetupShortcut(taskManager);
  // 全局ipc事件
  SetupGlobalIpc()
  // 注册托盘
  createTray(taskManager,tray);
  // 注册菜单
  // SignMenu(winPool);
});

// app活动
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(taskManager);
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

// app准备退出的时候
app.on('will-quit', () => {
  globalShortcut.unregisterAll()
  if (tray) {
    tray.destroy()
  }
})

function SetupShortcut(taskManager: TaskManager) {
  // 检测是否已经注册过快捷键
  if (globalShortcut.isRegistered("Alt+q")) {
    console.log("have registered")
  }
  let winMain = taskManager.getMainElectron()
  globalShortcut.register("Alt+q", () => {
    if (winMain.isFocused()) {
      winMain.minimize();
      winMain.reload();
    } else {
      winMain.focus();
    }
  })
  // 打开开发者调试工具
  globalShortcut.register("Alt+w", () => {
    if (winMain.webContents.isDevToolsOpened()) {
      winMain.webContents.closeDevTools();
    } else {
      winMain.webContents.openDevTools({ mode: "undocked" });
    }
  });
  // 打开任务管理器
  globalShortcut.register("Alt+e", () => {
    createTaskManager(taskManager);
  });

}