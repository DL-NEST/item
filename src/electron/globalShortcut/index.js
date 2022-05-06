import { globalShortcut } from "electron";
function SignShortcut(win) {
    globalShortcut.register("Alt+q", () => {
        if (win.isFocused()) {
            win.minimize();
            win.reload();
        }
        else {
            win.focus();
        }
    });
    // 打开开发者调试工具
    globalShortcut.register("Alt+w", () => {
        if (win.webContents.isDevToolsOpened()) {
            win.webContents.closeDevTools();
        }
        else {
            win.webContents.openDevTools({ mode: "undocked" });
        }
    });
}
export { SignShortcut };
//# sourceMappingURL=index.js.map