import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
            title:'Home - Cambrian'
          }
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/Faq.vue'),
    meta: {
            title:'FAQ - Cambrian'
          }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
            title:'About - Cambrian'
          }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../views/Partners.vue'),
    meta: {
            title:'Partners - Cambrian'
          }
  },
  {
    path: '/usecases',
    name: 'Usecases',
    component: () => import('../views/Usecases.vue'),
    meta: {
            title:'Usecases - Cambrian'
          }
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    meta: {
            title:'Products - Cambrian'
          }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
