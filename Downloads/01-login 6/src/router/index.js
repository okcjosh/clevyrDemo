/* eslint-disable no-unused-vars,no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import Dashboard from '@/components/Dashboard'
// import AuthService from '.././auth/AuthService'

// let auth = new AuthService()

// const { authenticated } = auth

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router

