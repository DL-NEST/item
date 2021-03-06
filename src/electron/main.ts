import {app, BrowserWindow, Tray,globalShortcut,session} from "electron";
import {createTaskManager, createTranslation, createWindow} from "./windows";
import {TaskManager} from "./processManage";
import {InitAppConf, createTray, SetupGlobalIpc} from "./appSetup";
import * as os from "os";
import * as path from "path";


// 窗口的管理
let taskManager = new TaskManager()
let tray:Tray | undefined = undefined


// 初始化app配置
InitAppConf()
// app准备完成
app.whenReady().then(async () => {
  console.log(app.getPath("userData"))
  console.log(app.getPath("home"))
  session.defaultSession.loadExtension('I:\\porject\\vueDevTool').then(() => {
    console.log('load Vue devtools success')
  })
  // 创建主窗口
  await createWindow(taskManager);
  // 全局快捷键
  SetupShortcut(taskManager);
  // ipc事件
  SetupGlobalIpc(taskManager)
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
  console.log('will quit')
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
  // 打开翻译
  // 打开任务管理器
  globalShortcut.register("Alt+x", () => {
    if (taskManager.getElectronProcessByName("translation")) {
      if (taskManager.getElectronProcessByName("translation").isFocused()){
        taskManager.getElectronProcessByName("translation").hide();
      }else {
        taskManager.getElectronProcessByName("translation").show();
      }
    }else{
      createTranslation(taskManager);
    }
  });

  globalShortcut.register("Alt+d", () => {
    console.log('Alt+b')
    taskManager.getElectronProcessByName('main').webContents.send('rollbackInNav',"webview")
  });
  // 当前任务进程的刷新
  globalShortcut.register("Alt+s", () => {
    console.log('Alt+b')
    BrowserWindow.getFocusedWindow()?.reload()
  });
}