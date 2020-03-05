import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import axios from "axios"
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    components: {},
    cart: []
  },
  actions: {
    getComponents({
      commit,
      state
    }, slug) {
      return new Promise((resolve, reject) => {
        const oldState = {
          ...state.components
        };
        commit('setComponents', {});
        axios.get(`/api/getItemsBySlug${slug}`).then(resp => {
          commit('setComponents', resp.data);
          resolve(resp.data)
        }).catch(err => {
          reject(err)
          // revert last state
          commit('setComponents', oldState);
        })
      });
    },
    addToCart({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        axios.post(`/api/cart/add`, data).then(resp => {
          commit('setCart', resp.data.cart);
          resolve(resp.data.cart);
        }).catch(err => {
          reject(err);
          // place to show some toast that produts isnt added to cart
        })
      });
    },
    getCart({
      commit
    }, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/cart/check`).then(resp => {
          commit('setCart', resp.data.cart);
          resolve(resp.data.cart);
        }).catch(err => {
          // place to show some toast that we cant check the cart
        })
      });
    }
  },
  mutations: {
    setCart(state, cart) {
      state.cart = cart;
    },
    addCart(state, item) {
      state.cart.push(item);
    },
    setComponents(state, components) {
      state.components = components;
    }
  },
  getters: {
    cartFiltered: (state) => {
      let cart = [...state.cart];
      cart.forEach(prod => {
        prod.quantity = _.size(_.filter(cart, item => prod.slug == item.slug))
      })
      return _.uniqBy(cart, 'slug');
    },
    isLoading: (state) => !_.size(state.components)
  }
});

export default store