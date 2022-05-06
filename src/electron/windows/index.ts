import {app, BrowserWindow,BrowserWindowConstructorOptions} from "electron";
import {join} from "path";



class WinPool {
    public main: BrowserWindow;
    public child: Map<string, BrowserWindow>;
    constructor(main: BrowserWindow) {
        this.main = main
        this.child = new Map<string, BrowserWindow>()
    }
    public getMain(){
        return this.main
    }
    public createChild(name:string,path:string,options:BrowserWindowConstructorOptions):BrowserWindow{
        let win = this.getChild(name)
        if(win){

            win.show()
            return win
        }else {
            let child = new BrowserWindow({
                ...options,
                icon: join(__dirname, "../../public/favicon.png"),
                webPreferences: {
                    contextIsolation: false,
                    nodeIntegration: true,
                }
            })
            if(app.isPackaged){
                child.loadFile(join(__dirname, `../render/index.html`)+`/#${path}`)
            }else {
                child.loadURL(`http://localhost:3000/#${path}`)
            }
            child.webContents.openDevTools()
            this.child.set(name,child)
            return child
        }
    }
    public getChild(name:string):BrowserWindow | undefined{
        return this.child.get(name)
    }
    public closeChildWindows(){
        this.child.forEach((win)=>{
            win.close()
        })
    }
    public closeAll(){
        BrowserWindow.getAllWindows().forEach((win)=>{
            win.close()
        })
    }
}

export {WinPool}
export * from './hover'