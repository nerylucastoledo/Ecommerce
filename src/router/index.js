import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Produto from '../views/Produto.vue'
import Carrinho from '../views/Carrinho.vue'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Racing from '../components/Racing.vue'
import Retro from '../components/Retro.vue'
import Motorizada from '../components/Motorizada.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: Produto,
    props: true
  },
  {
    path: '/racing',
    name: 'racing',
    component: Racing,
  },
  {
    path: '/retro',
    name: 'retro',
    component: Retro,
  },
  {
    path: '/motorizada',
    name: 'motorizada',
    component: Motorizada,
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
