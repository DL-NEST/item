import {BrowserWindow,MenuItem,MenuItemConstructorOptions} from 'electron';
import {taskManager, WinPool} from "../electron/windows";

type menuOption = {
    name: string;
    active: boolean;
    subList: subList[][];
};

type subList = {
    name: string;
    shortcuts?: string;
    click?: (winPool: WinPool) => void;
};

let menuLists:menuOption[] = [
    {
        name: "文件",
        active: false,
        subList: [
            [
                {
                    name: "新建",
                    shortcuts: "Ctrl+N",
                    click: (winPool:WinPool) => {
                        winPool.getMain().hide()
                    }
                },
                {
                    name: "打开",
                    shortcuts: "Ctrl+O",
                    click: (winPool:WinPool) => {

                    }
                },
                {
                    name: "保存",
                    shortcuts: "Ctrl+S"
                },
                {
                    name: "另存为",
                    shortcuts: "Ctrl+Shift+S"
                },
            ],
            [
                {
                    name: "查找",
                    shortcuts: "Ctrl+F"
                },
                {
                    name: "替换",
                    shortcuts: "Ctrl+H"
                },
                {
                    name: "转到",
                    shortcuts: "Ctrl+G"
                },
                {
                    name: "查找文件",
                    shortcuts: "Ctrl+Shift+F"
                },
                {
                    name: "查找目录",
                    shortcuts: "Ctrl+Shift+D"
                },
                {
                    name: "查找路径",
                    shortcuts: "Ctrl+Shift+P"
                }
            ],
            [
                {
                    name: "退出",
                    shortcuts: "Ctrl+Q"
                }
            ]
        ]
    },
    {
        name: "编辑",
        active: false,
        subList:[
            [
                {
                    name: "更改大小写",
                    shortcuts: "Ctrl+Shift+C"
                },
                {
                    name: "更改日期",
                    shortcuts: "Ctrl+Shift+H"
                },
                {
                    name: "快捷键设置",
                }
            ],
            [
                {
                    name: "页面设置",
                    shortcuts: "Ctrl+Shift+P"
                },
            ]
        ],
    },
    {
        name: "插件",
        active: false,
        subList:[
            [
                {
                    name: "插件管理",
                    shortcuts: "Ctrl+Shift+L"
                },
                {
                    name: "任务管理器",
                    shortcuts: "Ctrl+Shift+T",
                    click: (winPool:WinPool) => {
                        // taskManager(winPool);
                        console.log("taskManager");
                        let name = "任务管理器";
                        winPool.createChild(name,'/taskManager',{
                            title: name,
                            width: 500,
                            height: 450,
                            autoHideMenuBar: true, // 隐藏控制栏
                            alwaysOnTop: true
                        });
                    }
                }
            ],
            [
                {
                    name: "作者",
                    shortcuts: "Ctrl+Shift+P"
                }
            ]
        ],
    },
];


export {menuLists};
export type {menuOption,subList}