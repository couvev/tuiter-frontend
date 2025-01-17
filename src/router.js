import { createRouter, createWebHistory } from 'vue-router'
import HomeMain from './views/HomeMain.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain,
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router