
// 注册渲染进程的全局ipc通信
import {router} from "@/routes";

export function globalIpc(event: any) {
  // 注册全局ipc通信
    window.$ipc.on('rollbackInNav', (event, data) => {
        console.log('rollbackInNav', data);
        router.push('/nav');
    })
}