import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/solution-one',
  },
  {
    path: '/solution-one',
    name: 'SolutionOne',
    component: () => import('../pages/SolutionOne.vue'),
  },
  {
    path: '/solution-two',
    name: 'SolutionTwo',
    component: () => import('../pages/SolutionTwo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
