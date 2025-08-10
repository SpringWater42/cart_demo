import { createStore } from "vuex";
import axios from "axios";

const API_URL = "http://localhost:9090";

export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {},
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setToCart(state, payload) {
      state.cart = payload;
    }
  },
  actions: {
    async getProducts({ commit }, payload) {
      try {
        const response = await axios.get(`${API_URL}/products`, payload);
        commit("setProducts", response.data.products);
      } catch (error) {
        // console.error("Error getting products:", error);
      }
    },
    async addProductToCart({ commit }, payload) {
      try {
       await axios.post(`${API_URL}/add-to-cart`, payload);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    },
    async getCart({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/cart`);
        commit("setToCart", response.data.cart);
      } catch (error) {
        console.error("Error getting cart:", error);
      } 
    },
  },
  modules: {},
});
