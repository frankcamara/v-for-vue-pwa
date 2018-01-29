import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/AboutPage'
import Beers from '@/pages/BeersPage'
import Checkout from '@/pages/CheckoutPage'
import Beer from '@/pages/BeerPage'

const Friends = () => import('@/pages/FriendsPage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beers',
      component: Beers
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/friends/all',
      name: 'AllFriends',
      component: Friends
    }
  ]
})
