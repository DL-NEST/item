import {winCtrlBar, winMenuBar} from './control';
import {BrowserWindow} from 'electron';
import {ctrl_win} from "./windows";
import {WinPool} from "../windows";

// 注册ipc事件
// export function SignIpc(win:BrowserWindow) {
//     // topBar
//     winCtrlBar()
//     // winMenuBar(win)
//     // windows
//     // ctrl_win(win)
// }

export * from './control'