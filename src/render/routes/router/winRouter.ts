import {RouteRecordRaw} from "vue-router";

// 插件功能的路由列表
export const winRoutes: RouteRecordRaw[] = [
    {
        path: '/taskManager',
        name: 'taskManager',
        component: () => import('views/win/taskManager/index.vue'),
    },
    {
        path: '/translation',
        name: 'translation',
        component: () => import('views/win/translation/index.vue'),
    },
]
