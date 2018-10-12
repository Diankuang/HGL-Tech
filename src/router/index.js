import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/view/Layout'
// import Home from '@/view/home/Home'
import Banner from '@/view/banner/Banner'
import MyAccount from '@/view/myaccount/MyAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/banner',
          name: 'Banner',
          component: Banner
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/my-account',
          name: 'my-account',
          component: MyAccount
        }
      ]
    }
  ]
})
