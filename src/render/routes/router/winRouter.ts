import {RouteRecordRaw} from "vue-router";

export const winRoutes: RouteRecordRaw[] = [
    {
        path: '/taskManager',
        name: 'taskManager',
        component: () => import('views/taskManager/index.vue'),
    }
]