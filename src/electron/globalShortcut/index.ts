import { globalShortcut, BrowserWindow } from "electron";

function SignShortcut(winMain: BrowserWindow) {
  globalShortcut.register("Alt+q", () => {
    if (winMain.isFocused()) {
      winMain.minimize();
      winMain.reload();
    } else {
      winMain.focus();
    }
  });
  // 打开开发者调试工具
  globalShortcut.register("Alt+w", () => {
    if (winMain.webContents.isDevToolsOpened()) {
      winMain.webContents.closeDevTools();
    } else {
      winMain.webContents.openDevTools({ mode: "undocked" });
    }
  });
}

export { SignShortcut };
