import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/email-preview/EmailPreviewDemo.vue'),
    },
    {
        path: '/solution-one',
        component: () => import('../pages/solution-wang/WangDemo.vue'),
    },
    {
        path: '/solution-two',
        component: () => import('../pages/solution-tinymce/TinyMCEDemo.vue'),
    },
    {
        path: '/solution-three',
        component: () => import('../pages/solution-tinymce-2/TinyMCEDemo.vue'),
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
