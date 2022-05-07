import {release} from "os";
import {app} from "electron";
import {signProtocol} from "./protocol";

export function InitAppConf() {
    // 禁用GPU加速 in Windows 7
    if (release().startsWith("6.1")) app.disableHardwareAcceleration();
    // 设置Windows 10+通知的应用程序名称
    if (process.platform === "win32") app.setAppUserModelId(app.getName());
    // 电子使安全警告失效
    process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
    // 注册协议
    signProtocol()
}

export * from './tray';
export * from './protocol';
export * from './menu';
export * from './notification';
export * from './globalIpc';