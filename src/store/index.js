import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [
      { "id":2, "title":"Caffè Doppio", "desc":"Bryggd på månadens bönor.", "price":49, "quantity":1 },
      { "id":4, "title":"Latte Macchiato", "desc":"Bryggd på månadens bönor.", "price":49, "quantity":2 },
      { "id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39, "quantity":4 },
    ]
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
      console.log(data)
    },
    addOneItem(state, id){
      state.cart.find(item => item.id == id).quantity++
      console.log(state.cart)
    },
    removeOneItem(state, id){
      state.cart.find(item => item.id == id).quantity--
    },
    removeThisItem(state, id) {
      let filterArray = state.cart.filter(item => item.id !== id)
      state.cart = filterArray
    }
  },
  actions: {
    async fetchMenu(context) {
      const data = await API.fetchMenu()
      context.commit('addToMenu', data)
      return true
    },
    increase({commit}, id) {
      commit('addOneItem', id)
    },
    decrease({commit}, id) {
      commit('removeOneItem', id)
    },
    removeFromCart({commit}, id) {
      commit('removeThisItem', id)
    }
  },
})