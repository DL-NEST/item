"use strict";var b=Object.defineProperty;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))P.call(e,t)&&g(s,t,e[t]);if(f)for(var t of f(e))L.call(e,t)&&g(s,t,e[t]);return s};var o=require("electron"),c=require("path"),k=require("child_process"),v=require("os"),_=require("url"),A=require("fs");function y(s){if(s&&s.__esModule)return s;var e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});return s&&Object.keys(s).forEach(function(t){if(t!=="default"){var i=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return s[t]}})}}),e.default=s,Object.freeze(e)}var h=y(c);function x(s){s.createElectronProcess("taskManager","/taskManager",{width:600,height:500,title:"\u4EFB\u52A1\u7BA1\u7406\u5668",icon:c.join(__dirname,"../../public/favicon.png"),autoHideMenuBar:!0,alwaysOnTop:!0,webPreferences:{contextIsolation:!1,nodeIntegration:!0,preload:c.join(__dirname,"../preload/index.cjs")}},e=>{e.webContents.openDevTools(),o.ipcMain.on("taskManager_get",(t,i)=>{console.log(i),console.log(s.getElectronProcessByName("main")),e.webContents.send("taskManager_get_to",s.getAllProcessStatus())}),o.ipcMain.on("taskManager_DevTool",(t,i)=>{console.log(i),e.webContents.setMaxListeners(0)}),o.ipcMain.on("taskManager_Show",(t,i)=>{console.log(i),e.webContents.setMaxListeners(0)}),o.ipcMain.on("taskManager_Kill",(t,i)=>{console.log(i),e.webContents.setMaxListeners(0)})})}function m(s){s.createElectronProcess("main","/",{width:1055,height:710,icon:c.join(__dirname,"../../public/favicon.png"),frame:!1,titleBarStyle:"hidden",webPreferences:{contextIsolation:!1,nodeIntegration:!0,webSecurity:!0,webgl:!0,preload:c.join(__dirname,"../preload/index.cjs")}},()=>{o.ipcMain.on("btn_switch",(e,t)=>{t==="closeAll"&&s.exitAllTaskProcess()})})}function M(){o.protocol.registerSchemesAsPrivileged([{scheme:"app",privileges:{secure:!0,standard:!0}}])}const T=(s,e)=>{(e||o.protocol).registerBufferProtocol(s,(t,i)=>{let n=new _.URL(t.url).pathname;n=decodeURI(n),A.readFile(h.join(__dirname,"..",n),(r,p)=>{r&&(console.error(`Failed to read ${n} on ${s} protocol`,r),w({title:"url",body:`Failed to read ${h.join(__dirname,n)} on ${s} protocol`}));const l=h.extname(n).toLowerCase();let a="";l===".js"?a="text/javascript":l===".html"?a="text/html":l===".css"?a="text/css":l===".svg"||l===".svgz"?a="image/svg+xml":l===".json"?a="application/json":l===".wasm"&&(a="application/wasm"),i({mimeType:a,data:p})})})};function E(s,e){e=new o.Tray(c.join(__dirname,"../../public/favicon.png"));const t=o.Menu.buildFromTemplate([{label:"\u5173\u4E8E\u9879\u76EE",type:"normal",click:()=>{o.shell.openExternal("https://github.com/DL-NEST").then(i=>{})}},{label:"\u68C0\u6D4B\u66F4\u65B0",type:"normal",click:()=>{w({title:"\u68C0\u6D4B\u66F4\u65B0",body:"\u6CA1\u6709\u66F4\u65B0"})}},{label:"Item2",type:"separator",click:()=>{}},{label:"\u91CD\u65B0\u52A0\u8F7D",type:"normal",click:()=>{s.getMainElectron().reload()}},{label:"\u9000\u51FA",type:"normal",click:()=>{s.exitAllTaskProcess()}}]);e.setToolTip(`item
\u7248\u672C\u53F7\uFF1A0.1.0
\u4F5C\u8005\uFF1Adl-nest`),e.setContextMenu(t),e.on("click",()=>{s.getMainElectron().show()})}function w(s){new o.Notification(d({icon:c.join(__dirname,"../../public/favicon.png")},s)).show()}function B(){F()}function F(){o.ipcMain.on("btn_switch",(s,e)=>{let t=o.BrowserWindow.getFocusedWindow();if(t)switch(e){case"minimize":t.minimize();break;case"close":t.close();break;case"maximize":t.isMaximized()?t.unmaximize():t.maximize();break;case"fix":t.setAlwaysOnTop(!t.isAlwaysOnTop(),"floating");break}})}function C(){v.release().startsWith("6.1")&&o.app.disableHardwareAcceleration(),process.platform==="win32"&&o.app.setAppUserModelId(o.app.getName()),process.env.ELECTRON_DISABLE_SECURITY_WARNINGS="true",M()}class S{constructor(){this.electronProcessList={},this.taskProcessList={}}getTaskProcessList(){return this.taskProcessList}getElectronProcessList(){return this.electronProcessList}getTaskProcessByName(e){return this.taskProcessList[e]}getElectronProcessByName(e){return this.electronProcessList[e]}getMainElectron(){return this.electronProcessList.main}exitAllTaskProcess(){for(let e in this.taskProcessList)this.taskProcessList[e].kill();for(let e in this.electronProcessList)this.electronProcessList[e].close()}getAllProcessStatus(){let e=[];for(let t in this.taskProcessList)e.push({name:t,cpu:2,mark:"task",memory:3,pid:this.taskProcessList[t].pid,status:this.taskProcessList[t].connected});for(let t in this.electronProcessList)e.push({name:t,cpu:2,mark:"electron",memory:3,pid:this.electronProcessList[t].id,status:this.electronProcessList[t].isDestroyed()});return e}createElectronProcess(e,t,i,n){if(this.electronProcessList[e])return;const r=new o.BrowserWindow(d({show:!1},i));T("app"),o.app.isPackaged?r.loadURL(`app://../render/index.html#${t}`).then(p=>{}):r.loadURL(`http://localhost:3000/#${t}`).then(p=>{}),this.electronProcessList[e]=r,r.on("close",()=>{console.log(`${e} -- close`),delete this.electronProcessList[e]}),r.on("ready-to-show",()=>{r.show()}),n(r)}createTaskProcess(e,t,i){this.taskProcessList[e]||(this.taskProcessList[e]=k.spawn(t,i),this.taskProcessList[e].on("exit",n=>{console.log(`\u4EFB\u52A1\u8FDB\u7A0B ${e} \u9000\u51FA,\u9000\u51FA\u7801\u4E3A: ${n}`),delete this.taskProcessList[e]}))}}let u=new S,j;C();o.app.whenReady().then(async()=>{await m(u),D(u),B(),E(u,j)});o.app.on("activate",()=>{o.BrowserWindow.getAllWindows().length===0&&m(u)});o.app.on("ready",()=>{});o.app.on("window-all-closed",()=>{process.platform!=="darwin"&&o.app.quit()});o.app.on("will-quit",()=>{o.globalShortcut.unregisterAll()});function D(s){o.globalShortcut.isRegistered("Alt+q")&&console.log("have registered");let e=s.getMainElectron();o.globalShortcut.register("Alt+q",()=>{e.isFocused()?(e.minimize(),e.reload()):e.focus()}),o.globalShortcut.register("Alt+w",()=>{e.webContents.isDevToolsOpened()?e.webContents.closeDevTools():e.webContents.openDevTools({mode:"undocked"})}),o.globalShortcut.register("Alt+e",()=>{x(s)})}
