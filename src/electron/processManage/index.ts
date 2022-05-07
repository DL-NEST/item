import {app, BrowserWindow, BrowserWindowConstructorOptions} from 'electron';
import {ChildProcess, spawn} from "child_process";
import {createProtocol} from "@/appSetup";
import {processManageType} from "./type";

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

    // 初始化变量
    constructor() {
        this.electronProcessList = {};
        this.taskProcessList = {};
    }

    // 返回任务进程的列表
    public getTaskProcessList(): any {
        return this.taskProcessList   // 返回任务进程列表
    }

    public getElectronProcessList(): any {
        return this.electronProcessList   // 返回electron进程列表
    }

    // 返回任务
    public getTaskProcessByName(key: string): any {
        return this.taskProcessList[key]
    }

    public getElectronProcessByName(key: string): BrowserWindow {
        return this.electronProcessList[key]
    }

    public getMainElectron(): BrowserWindow {
        return this.electronProcessList['main']
    }

    // 退出所有进程
    public exitAllTaskProcess(): void {
        for (let key in this.taskProcessList) {
            this.taskProcessList[key].kill();
        }
        for (let key in this.electronProcessList) {
            this.electronProcessList[key].close();
        }
    }

    // 返回所有进程的状态参数
    public getAllProcessStatus(): processManageType[] {
        let processList: processManageType[] = [];
        for (let key in this.taskProcessList) {
            processList.push({
                name: key,
                cpu: 2,
                mark: 'task',
                memory: 3,
                pid: this.taskProcessList[key].pid,
                status: this.taskProcessList[key].connected
            });
        }
        for (let key in this.electronProcessList) {
            processList.push({
                name: key,
                cpu: 2,
                mark: 'electron',
                memory: 3,
                pid: this.electronProcessList[key].id,
                status: this.electronProcessList[key].isDestroyed()
            })
        }
        return processList;
    }

    // electron进程创建方法
    public createElectronProcess(name: string, routerPath: string, args: BrowserWindowConstructorOptions, registerIpc: (electronProcess: BrowserWindow) => any): void {
        if (this.electronProcessList[name]) {
            return;
        }
        // 创建electron进程
        const electronProcess = new BrowserWindow({
            // 在创建的时候不显示窗口
            show: false,
            ...args,
        });
        createProtocol('app');
        // 加载electron进程
        if (app.isPackaged) {
            electronProcess.loadURL(`app://../render/index.html#${routerPath}`).then((r) => {
            });
        } else {
            electronProcess.loadURL(`http://localhost:3000/#${routerPath}`).then((r) => {
            });
        }
        // 将electron进程加入到electron进程列表中
        this.electronProcessList[name] = electronProcess;
        // 添加electron进程的退出事件
        electronProcess.on('close', () => {
            console.log(`${name} -- close`);
            // 删除electron进程
            delete this.electronProcessList[name];
        });
        // 窗口准备完毕后执行
        electronProcess.on('ready-to-show', () => {
            electronProcess.show();
        });
        // electron的ipc事件列表
        registerIpc(electronProcess);
    }

    // 任务的创建
    public createTaskProcess(taskName: string, taskPath: string, taskArgument: string[]): void {
        if (this.taskProcessList[taskName]) {
            return;
        }
        // 创建任务进程
        this.taskProcessList[taskName] = spawn(taskPath, taskArgument);
        // 监听任务进程的退出事件
        this.taskProcessList[taskName].on('exit', (code) => {
            console.log(`任务进程 ${taskName} 退出,退出码为: ${code}`);
            // 删除任务进程
            delete this.taskProcessList[taskName];
        });
    }
}

export {TaskManager};