import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})
