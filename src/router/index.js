import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/AboutPage'
import Beers from '@/pages/BeersPage'
import Checkout from '@/pages/CheckoutPage'
import Beer from '@/pages/BeerPage'

const List = () => import('@/components/List')
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
    }
  ]
})
