/** 装填路由 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue';
import { createRouterGuide } from '@/routes/guard';


const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/nav',
    },
    {
        path: '/nav',
        name: 'nav',
        component: () => import('views/nav/nav.vue')
    },
    {
        path: '/request',
        name: 'request',
        component: () => import('views/request/index.vue'),
    },
    {
        path: '/taskManager',
        name: 'taskManager',
        component: () => import('views/taskManager/index.vue'),
    },
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
