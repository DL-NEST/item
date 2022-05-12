/** 装填路由 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue';
import { createRouterGuide } from '@/routes/guard';
import {htmRoutes, winRoutes} from "@/routes/router";


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/nav',
    },
    ...winRoutes,...htmRoutes
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export async function setupRouter(app: App) {
    // 装载路由
    app.use(router);
    // 装载路由守卫
    createRouterGuide(router);
    // 等待装载结束
    await router.isReady();
}

export { router };