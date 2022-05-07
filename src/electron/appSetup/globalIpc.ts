import {ipcMain,BrowserWindow} from 'electron';


export function SetupGlobalIpc() {
    winCtrlBar();
}

function winCtrlBar() {
    ipcMain.on('btn_switch', (event, args) => {
            let win = BrowserWindow.getFocusedWindow()
            switch (args) {
                case 'minimize':
                    win.minimize();
                    break;
                case 'close':
                    win.close();
                    break;
                case 'maximize':
                    if (win.isMaximized()) {
                        win.unmaximize();
                    } else {
                        win.maximize();
                    }
                    break;
                case 'fix':
                    win.setAlwaysOnTop(!win.isAlwaysOnTop(), 'floating');
                    break;
            }
        },
    );
}