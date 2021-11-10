import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: {
      loggedIn: false,
      data: null
    },
    carrinho: {
      items: [],
    },
  },

  getters: {
    user(state){
      return state.user
    }

  },

  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },

    SET_USER(state, data) {
      state.user.data = data;
    },

    INICIALIZAR_STORAGE(state) {
      if(localStorage.getItem('carrinho')) {
        state.carrinho = JSON.parse(localStorage.getItem('carrinho'))

      } else {
        localStorage.setItem('carrinho', JSON.stringify(state.carrinho))

      }
    },

    ADICIONAR_AO_CARRINHO(state, item) {
      const exists = state.carrinho.items.filter(i => i.produto.id_produto === item.produto.id_produto)

      if (exists.length) {
        exists[0].quantidade = parseInt(exists[0].quantidade) + parseInt(item.quantidade)
      } else {
        state.carrinho.items.push(item)
      }

      localStorage.setItem('carrinho', JSON.stringify(state.carrinho))
    },

    ZERAR_CARRINHO(state) {
      state.carrinho.items = []
      localStorage.setItem('carrinho', [])
    },

  },

  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);

      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });

      } else {
        commit("SET_USER", null);
        
      }
    },
  },

  modules: {
  }
  
})
