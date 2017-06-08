/* eslint-disable no-unused-vars,no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import Dashboard from '@/components/Dashboard'
import SVG from '@/components/SVG'
import Bash from '@/components/Bash'
import API from '@/components/API'
// import projects from '@/components/projects'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: projects
    // },
    {
      path: '/svg',
      name: 'SVG',
      component: SVG
    },
    {
      path: '/bash',
      name: 'Bash',
      component: Bash
    },
    {
      path: '/api',
      name: 'API',
      component: API
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router

