import Vue from 'vue'
import Router from 'vue-router'
import Modify from 'views/index/modify/modify'
import UserList from 'views/index/user-list/user-list'
import FormList from 'views/index/form-list/form-list'
import Index from 'views/index/index'
import Login from 'views/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/index',
      component: Index,
      children: [
        {
          path: 'modify',
          component: Modify
        },
        {
          path: 'form-list',
          component: FormList
        },
        {
          path: 'user-list',
          component: UserList
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Login
    }
  ]
})
