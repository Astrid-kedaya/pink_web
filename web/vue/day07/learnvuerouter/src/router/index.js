import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

const Home = () => import('../components/home')
const HomeNews = () => import('../components/homeNews')
const HomeMessage = () => import('../components/homeMessage')

const About = () => import('../components/about')
const User = () => import('../components/user')
const Profile = () => import('../components/profile')

Vue.use(Router)

const routes = [
  {
    path: '', 
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title:'首页'
    },
    children: [
      // {
      //   path: '',
      //   component: HomeNews
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title:'关于'
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title:'用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title:'档案'
    },
  },
]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title
  next()
})

export default router
