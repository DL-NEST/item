import {RouteRecordRaw} from "vue-router";

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
]