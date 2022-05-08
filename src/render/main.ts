import {createApp} from "vue";
import App from "./App.vue";
import "./style/index.scss";
import {setupRouter} from "@/routes";
import { useIpcRenderer } from '@vueuse/electron'
import setupGlobal from "@/components/global";
import {createPinia} from "pinia";

const app = createApp(App);
window.$ipc = useIpcRenderer();     // 全局ipc

(async function setupApp() {
    // 装载全局store/pinia
    app.use(createPinia());
    // 装载路由
    await setupRouter(app);
    // 初始化全局组件
    setupGlobal(app);
    // 挂载实列
    await app.mount('#app');
})();

