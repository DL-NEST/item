import {RouteRecordRaw} from "vue-router";
import {homeRouter} from "@/routes/router/homeRouter";

export const htmRoutes: RouteRecordRaw[] = [
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
    // 主页的路由
    homeRouter
]