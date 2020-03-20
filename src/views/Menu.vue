<template>
  <div class="menu">
    <LoadingScreen />
    <header>
      <NavButton v-on:openNav="openNav()" />
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
      <CartButton @click.native="toggleCart" />
    </header>


    <MenuList />

    <main>
      <Nav />
      <Cart v-if="cart" />
    </main>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen";
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";

import CartButton from '@/components/CartButton'
import Cart from '@/components/Cart'
import LoadingScreen from '@/components/LoadingScreen.vue'
import MenuList from '@/components/MenuList.vue'


export default {
  components: {

    CartButton,
    Cart,
    LoadingScreen,
    NavButton,
    Nav,
    MenuList
  },
  data: () => {
    return {
      cart: false,
      navVisible: false
    };

  },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    toggleCart() {
      this.cart = !this.cart;
    },
    closeNav() {
      this.navVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: pink;
  min-height: 810px;
  width: 100%;
  padding-bottom: 20px;
}
header {
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: center;
  flex-direction: column;
}
</style>
