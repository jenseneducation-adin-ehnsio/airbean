import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    totalPrice: 0,
  },
  mutations: {
    addToMenu(state, data){
      state.menu = data
      console.log(data)
    }
  },
  actions: {
    async fetchMenu(context) {
      const data = await API.fetchMenu()
      context.commit('addToMenu', data)
      return true
    }
  },
})
