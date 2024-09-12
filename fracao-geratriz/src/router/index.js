import { createRouter, createWebHistory } from 'vue-router'
import Calculadora from '@/components/Calculadora.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fracao-geratriz',
      name: 'fração geratriz',
      component: Calculadora
    }
  ]
})

export default router
