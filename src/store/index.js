import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    order: {},
    loading: true
  },
  getters: {
    totalPrice: (state) => {
      let total = 0
      for (let i = 0; i < state.cart.length; i++) {
        let item = state.cart[i]
        total += item.price * item.quantity
      }
      return total
    },
    numberOfCartItems: (state) => {
      let numberOfItems = 0
      state.cart.forEach(item => {
        numberOfItems += item.quantity
      });
      return numberOfItems
    }
  },
  mutations: {
    addToMenu(state, data){
      state.menu = data
    },
    addOneItem(state, id){
      state.cart.find(item => item.id == id).quantity++
    },
    removeOneItem(state, id){
      state.cart.find(item => item.id == id).quantity--
    },
    removeThisItem(state, id) {
      let filterArray = state.cart.filter(item => item.id !== id)
      state.cart = filterArray
    },
    addThisItem(state, newItem){
      state.cart.push(newItem)
    },
    saveOrder(state, order) {
      state.order = order
    },
    emptyCart(state) {
      state.cart = []
    }
},
  actions: {
    async fetchMenu({commit, state}) {
      const data = await API.fetchMenu()
      commit('addToMenu', data)
      setTimeout(() => {
        state.loading = false;
      }, 2000);
      return true
    },
    async placeOrder({commit, state, getters}) {
      const data = await API.addOrder(state.cart, getters.totalPrice)
      commit('saveOrder', data)
      commit('emptyCart')
    },
    increase({commit}, id) {
      commit('addOneItem', id)
    },
    decrease({commit}, id) {
      commit('removeOneItem', id)
    },
    removeFromCart({commit}, id) {
      commit('removeThisItem', id)
    },
    addItem({commit, state}, newItem){
      if(state.cart.find(item => item.id == newItem.id)){
        commit('addOneItem', newItem.id)
      }else{
        newItem.quantity = 1
        commit('addThisItem', newItem)
      }
    }
  }
})