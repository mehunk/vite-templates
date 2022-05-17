import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    props: {
      msg: 'Vue 3 + Vite'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/AboutMe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
