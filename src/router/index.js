import Vue from 'vue'
import VueRouter from 'vue-router'
import ListHome from '../views/ListHome.vue'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ConcluirPedido from '../views/ConcluirPedido.vue'
import EsquecerSenha from '../views/EsquecerSenha.vue'
import MeusPedidos from '../views/MeusPedidos.vue'
import Produto from '../views/Produto.vue'
import Carrinho from '../views/Carrinho.vue'
import Racing from '../views/Racing.vue'
import Retro from '../views/Retro.vue'
import Motorizada from '../views/Motorizada.vue'
import Dashboard from '../views/Dashboard.vue'
import CadastrarItem from '../views/CadastrarItem.vue'
import AtualizarItem from '../views/AtualizarItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/',
    name: 'Home',
    component: ListHome
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
  {
    path: '/concluir-pedido',
    name: 'concluirpedido',
    component: ConcluirPedido,
  },
  {
    path: '/esqueci-senha',
    name: 'esquecisenha',
    component: EsquecerSenha,
  },
  {
    path: '/meus-pedidos',
    name: 'meuspedidos',
    component: MeusPedidos,
  },
  {
    path: '/cadastrar-item',
    name: 'CadastrarItem',
    component: CadastrarItem
  },
  {
    path: '/atualizar-item',
    name: 'AtualizarItem',
    component: AtualizarItem
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" })
  }
})

export default router
