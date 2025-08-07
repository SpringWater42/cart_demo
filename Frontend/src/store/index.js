import { createStore } from 'vuex'
import axios from 'axios';

const API_URL = 'http://localhost:9090';

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
        async getProducts({ commit }, payload) {
      try {
        const response = await axios.get(`${API_URL}/products`, payload);
        commit('setProducts', response.data.products);
      } catch (error) {
        // console.error("Error getting products:", error);
      }
    },

  },
  modules: {
  }
})
