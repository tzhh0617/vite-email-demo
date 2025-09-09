import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/solution-one',
  },
  {
    path: '/solution-one',
    component: () => import('../pages/solution-tinymce/TinyMCEDemo.vue'),
  },
  {
    path: '/solution-two',
    component: () => import('../pages/SolutionTwo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
