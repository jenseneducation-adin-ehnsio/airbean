import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [],
    cart: [],
    order: {},
    loading: true,
    user: { name: "", email: "" },
    userSkip: false,
    orderHistory: [],
    showLogin: false,
    loadingOrder: false
  },
  getters: {
    /*  Räkna ut totalsumman i shopping cart */
    totalPrice: state => {
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        let item = state.cart[i];
        total += item.price * item.quantity;
      }
      return total;
    },
    /*  Räkna ut total items i shopping cart */
    numberOfCartItems: state => {
      let numberOfItems = 0;
      state.cart.forEach(item => {
        numberOfItems += item.quantity;
      });
      return numberOfItems;
    },
    /*  Räkna ut total spenderat i orderhistorik */
    totalSpent: state => {
      let totalSpent = 0;
      for (let i = 0; i < state.orderHistory.length; i++) {
        let item = state.orderHistory[i];
        totalSpent += item.totalValue;
      }
      return totalSpent;
    }
  },
  mutations: {
    /*  Tilldela data */
    addToMenu(state, data) {
      state.menu = data;
    },
    /*  Lägg till cart item via id och okar antalet*/
    addOneItem(state, id) {
      state.cart.find(item => item.id == id).quantity++;
    },
    /*  Ta bort cart item via id och minskar antalet*/
    removeOneItem(state, id) {
      state.cart.find(item => item.id == id).quantity--;
    },
    /*  Ta bort cart item via id */
    removeThisItem(state, id) {
      let filterArray = state.cart.filter(item => item.id !== id);
      state.cart = filterArray;
    },
    /*  Lägg till cart item */
    addThisItem(state, newItem) {
      state.cart.push(newItem);
    },
    /* Spara order enligt user id */
    saveOrder(state, order) {
      state.order = order;
    },
    /*  Töm cart */
    emptyCart(state) {
      state.cart = [];
    },
    /*  Tilldela user id (uuid) */
    saveUserId(state, id) {
      state.user.id = id;
    },

    /*  Spara alla ordrar i orderHistory */
    setOrders(state, data) {
      state.orderHistory = data;
    },
    /*  Tilldela state user*/
    setThisUser(state, user) {
      state.user.name = user.name;
      state.user.email = user.email;
    },
    toggleThisLogin(state) {
      state.showLogin = !state.showLogin
    },
    skipThisLogin(state) {
      state.userSkip = true
    }
  },
  actions: {
    /*  Kommitta mutation av data menu */
    async fetchMenu({ commit, state }) {
      const data = await API.fetchMenu();
      commit("addToMenu", data);
      setTimeout(() => {
        state.loading = false;
      }, 2000);
      return true;
    },

    /*  Kommitta mutation av place och add order och andra ändringar dvs increase, decrease av kvantitet */
    async placeOrder({ commit, state, getters }) {
      const data = await API.addOrder(
        state.cart,
        getters.totalPrice,
        state.user.id
      );
      commit("saveOrder", data);
      commit("emptyCart");
    },
    increase({ commit }, id) {
      commit("addOneItem", id);
    },
    decrease({ commit }, id) {
      commit("removeOneItem", id);
    },
    removeFromCart({ commit }, id) {
      commit("removeThisItem", id);
    },
    addItem({ commit, state }, newItem) {
      if (state.cart.find(item => item.id == newItem.id)) {
        commit("addOneItem", newItem.id);
      } else {
        newItem.quantity = 1;
        commit("addThisItem", newItem);
      }
    },
    toggleLogin({ commit }) {
      commit("toggleThisLogin")
    },
    skipLogin({ commit }) {
      commit("skipThisLogin")
    },


    /*  Kommitta mutation av item id i datan och i local storage om det finns inte */
    async setId({ commit }, id) {
      if (!id) {
        const data = await API.fetchId();
        commit("saveUserId", data);
        const parsed = JSON.stringify(data);
        localStorage.setItem("id", parsed);
      } else {
        commit("saveUserId", id);
      }
    },

    /*  Kommitta mutation av hämta ordern efter user id(uuid) */
    async getOrders({ commit }, id) {
      const data = await API.fetchOrders(id);
      commit("setOrders", data);
    },

    /*  Kommitta mutation av user name och email i local storage */
    setUser({ commit }, user) {
      commit("setThisUser", user);
      const parsedUser = JSON.stringify(user);
      localStorage.setItem("user", parsedUser);
    }
  }
});
