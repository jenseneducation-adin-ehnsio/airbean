<template>
  <div class="menu">
    <LoadingScreen v-show="false" />
    <header>
      <NavButton v-bind:showNav="navVisible" v-on:navOpen="openNav" />
      <CartButton @click.native="toggleCart" />
    </header>

    <Cart v-if="cart" />
    <main>
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
      <MenuList />
    </main>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
import CartButton from "@/components/CartButton";
import Cart from "@/components/Cart";
import LoadingScreen from "@/components/LoadingScreen.vue";
import MenuList from "@/components/MenuList.vue";

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
    },
    openNav() {
      this.navVisible = false;
      this.cart = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  background-color: pink;
  min-height: 810px;
  width: 100%;
  padding-bottom: 20px;
}
header {
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: row;
}
</style>
