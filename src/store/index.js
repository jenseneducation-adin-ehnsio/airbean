import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: []
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
    },
    addItem({commit, state}, newItem){
      
      if(state.cart.find(item => item.id == newItem.id)){
        commit('addOneItem', newItem.id)
        console.log(state.cart)
      }else{
        newItem.quantity++
        commit('addThisItem', newItem)
        console.log(state.cart)
      }
    }
  }
})