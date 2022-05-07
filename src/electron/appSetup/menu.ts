import { Menu, MenuItem ,BrowserWindow,MenuItemConstructorOptions} from 'electron';
import {menuLists, subList} from "../../global";
import {WinPool} from "../windows";


function SignMenu(winPool: WinPool) {
    /** 注册窗口菜单 */
    const menu = new Menu();
    menuLists.forEach(item => {
        const menuItem = new MenuItem({
            label: item.name,
            submenu: submenuList(item.subList,winPool)
        });
        menu.append(menuItem);
    });
    Menu.setApplicationMenu(menu);
}

function submenuList(menuOption: subList[][], winPool: WinPool):Electron.CrossProcessExports.MenuItemConstructorOptions[] {
    let subList: MenuItemConstructorOptions[] = [];
    menuOption.forEach(item => {
        item.forEach(subItem => {
            subList.push({
                label: subItem.name,
                accelerator: subItem.shortcuts,
                click: () => {
                    if (subItem.click) {
                        subItem.click(winPool);
                    }
                 }
            });
        });
    });
    return subList
}

export {SignMenu};

/** 注册右键菜单 */
// sub-menu
