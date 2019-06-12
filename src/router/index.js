import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Create from "@/pages/Create"
import Detail from "@/pages/Detail"
import Edit from "@/pages/Edit"
import My from "@/pages/My"
import User from "@/pages/User"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/user',
      component: User
    }
  ]
})
