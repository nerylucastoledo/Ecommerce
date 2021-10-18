import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    user: {
      loggedIn: false,
      data: null
    },
    carrinho: 0,
    idProdutosCarrinho: []

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

    INCREMENTAR_CARRINHO(state, value) {
      state.carrinho += 1
      state.idProdutosCarrinho.push(value)
    },

    DECREMENTAR_CARRINHO(state, value) {
      state.carrinho -= 1

      let removerItem = value
      let indice = state.idProdutosCarrinho.indexOf(removerItem)

      while(indice >= 0) {
        state.idProdutosCarrinho.splice(indice, 1)
        indice = state.idProdutosCarrinho.indexOf(removerItem)
      }

    }

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

    incrementarCarrinho(context, produto) {
      context.commit('INCREMENTAR_CARRINHO', produto)
    },

    decrementarCarrinho(context, produto) {
      context.commit('DECREMENTAR_CARRINHO', produto)
    }

  },

  modules: {
  }
  
})
