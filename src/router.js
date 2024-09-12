import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from './views/HomeMain.vue'
import Login from './views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router