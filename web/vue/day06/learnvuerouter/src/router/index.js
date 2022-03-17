import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home'
import About from '../components/about'

Vue.use(Router)
const routes = [
  {
    path: '', 
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
export default router
