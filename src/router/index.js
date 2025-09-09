import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/email-preview/EmailPreviewDemo.vue'),
    },
    {
        path: '/solution-two',
        component: () => import('../pages/solution-tinymce/TinyMCEDemo.vue'),
    },
    {
        path: '/solution-one',
        component: () => import('../pages/solution-wang/WangDemo.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
