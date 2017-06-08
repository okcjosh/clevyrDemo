/* eslint-disable no-unused-vars,no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import Callback from '@/components/Callback'
import Dashboard from '@/components/Dashboard'
import SVG from '@/components/SVG'
import Bash from '@/components/Bash'
import Projects from '@/components/Projects'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
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
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
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
      path: '*',
      redirect: '/dashboard'
    }
  ]
})

export default router

