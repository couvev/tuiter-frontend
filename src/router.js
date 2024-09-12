import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from './views/HomeMain.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

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
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router