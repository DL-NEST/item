import {WinPool} from "./index";


function taskManager(winPool: WinPool) {
    let name = "taskManager";
    winPool.createChild(name,'/taskManager',{
        title: name,
        width: 600,
        height: 500,
        autoHideMenuBar: true, // 隐藏控制栏
        alwaysOnTop: true
    });
}

export {taskManager}