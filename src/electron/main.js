import { release } from "os";
import { app, BrowserWindow, Notification } from "electron";
import { join } from "path";
import { SignTray } from "./tray";
import { SignShortcut } from "./globalShortcut";
// 禁用GPU加速 in Windows 7
if (release().startsWith("6.1"))
    app.disableHardwareAcceleration();
// 设置Windows 10+通知的应用程序名称
if (process.platform === "win32")
    app.setAppUserModelId(app.getName());
if (!app.requestSingleInstanceLock()) {
    app.quit();
    process.exit(0);
}
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
let win;
let icon = join(__dirname, "../../public/favicon.png");
function createWindow() {
    win = new BrowserWindow({
        width: 1055,
        height: 710,
        icon: icon,
        frame: false,
        // resizable: false, // 窗口不可以调整大小
        // autoHideMenuBar: true, // 隐藏控制栏
        titleBarStyle: "hidden",
        alwaysOnTop: true,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            webSecurity: true,
            webgl: true,
            // preload: join(__dirname, 'preload.js')
        },
    });
    win.on("ready-to-show", () => {
        win?.show();
    });
    if (app.isPackaged) {
        win.loadFile(join(__dirname, "../renderer/index.html")).then((r) => {
            console.log("PRO_MODE");
        });
    }
    else {
        win.loadURL("http://localhost:3000").then((r) => {
            console.log("TEST_MODE");
        });
    }
}
// app准备之前
app.whenReady().then(() => {
    createWindow();
    // 注册托盘
    SignTray(icon, win);
    // 全局快捷键
    SignShortcut(win);
    // 注册通知
    new Notification({
        title: "欢迎使用",
        body: "请点击右上角的设置按钮进行设置",
        icon: icon,
    }).show();
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// app 准备好了
app.on("ready", async () => { });
// app 关闭
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
//# sourceMappingURL=main.js.map