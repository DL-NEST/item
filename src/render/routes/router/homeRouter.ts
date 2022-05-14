import {RouteRecordRaw} from "vue-router";

export const homeRouter: RouteRecordRaw = {
    path: '/home',
    name: 'home',
    component: () => import('views/home/index.vue'),
    children:[
        {
            path: '/home/itemManager',
            name: 'itemManager',
            component: () => import('views/home/itemManager.vue')
        },
        // 错误的路由重定向的404页面
        {
            path: "/:pathMatch(.*)*",
            name: `404`,
            component: () => import('views/home/404.vue')
        }
    ]
}