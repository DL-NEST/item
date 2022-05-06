import {winCtrlBar, winMenuBar} from './control';
import {BrowserWindow} from 'electron';
import {ctrl_win} from "./windows";
import {WinPool} from "../windows";

// 注册ipc事件
export function SignIpc(winPool:WinPool) {
    // topBar
    winCtrlBar()
    winMenuBar(winPool)
    // windows
    ctrl_win(winPool)
}
