import {app, BrowserWindow, BrowserWindowConstructorOptions} from 'electron';
import {ChildProcess, spawn,fork} from "child_process";
import {join} from "path";

/*
* 任务进程管理器,用于管理任务进程,并且提供任务进程的启动和关闭功能,以及监听任务进程的退出事件
* Electron 中的进程管理器是一个全局的对象,可以通过这个对象来管理进程,并且可以监听进程的退出事件
* 进程管理器的实例化方式: const {ProcessManager} = require('electron-process-manager');
* 实例化后,可以通过这个实例化对象来创建任务进程,并且可以监听任务进程的退出事件
* 任务进程的创建方式: const taskProcess = new ProcessManager({   任务进程的名称,必须是唯一的
*
* */



// 任务管理器的全局对象
class TaskManager {
    // electron进程
    private electronProcessList: {
        [key: string]: BrowserWindow;
    };
    // 任务进程
    private taskProcessList: {
        [key: string]: ChildProcess;
    };

    // 任务进程的退出事件
    private taskProcessExitEvent: {
        [key: string]: (code: number) => void;
    }
    private electronProcessExitEvent: {
        [key: string]: (code: number) => void;
    }

    // 返回任务进程的列表
    public getTaskProcessList():any {
        return this.taskProcessList   // 返回任务进程列表
    }
    public getElectronProcessList():any {
        return this.electronProcessList   // 返回electron进程列表
    }
    // 返回任务
    public getTaskProcess(key:string):any {
        return this.taskProcessExitEvent[key]   // 返回任务进程退出事件
    }
    public getElectronProcess(key:string):any {
        return this.electronProcessList[key]   // 返回electron进程列表
    }

    // electron进程创建方法
    public createElectronProcess(name: string, path: string, args: BrowserWindowConstructorOptions): void {
        // 创建electron进程
        const electronProcess = new BrowserWindow({
            ...args,
        });
        // 加载electron进程
        console.log(process.env)
        if (app.isPackaged) {
            electronProcess.loadFile(join(__dirname, `../render/index.html`)+`/#${path}`).then((r) => {
                console.log("PRO_MODE");
            });
        } else {
            electronProcess.loadURL(`http://localhost:3000/#${path}`).then((r) => {
                console.log("TEST_MODE");
            });
        }
        // 将electron进程加入到electron进程列表中
        this.electronProcessList[name] = electronProcess;
        // 将electron进程的退出事件加入到electron进程退出事件列表中
        this.electronProcessExitEvent[name] = (code: number) => {
            console.log(`electron进程${name}退出了,退出码为${code}`);
            delete this.electronProcessList[name];
            delete this.electronProcessExitEvent[name];
        }
    }

    // 任务的创建
    public createTaskProcess(taskName: string, taskPath: string, taskArgument: string[]): void {
        // 创建任务进程
        this.taskProcessList[taskName] = spawn(taskPath, taskArgument);
        // 监听任务进程的退出事件
        this.taskProcessList[taskName].on('exit', (code) => {
            console.log(`任务进程 ${taskName} 退出,退出码为: ${code}`);
            // 删除任务进程
            delete this.taskProcessList[taskName];
            // 删除任务进程的退出事件
            delete this.taskProcessExitEvent[taskName];
        });
    }
}

export {TaskManager};