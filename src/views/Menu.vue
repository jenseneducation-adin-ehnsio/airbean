<template>
  <div class="menu">
    <LoadingScreen />
    <header>
      <NavButton v-bind:showNav="navVisible" v-on:navOpen="openNav" />
      <CartButton @click.native="toggleCart" />
    </header>
    <main>
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
      <Cart v-if="cart" />
    </main>
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen";
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
import CartButton from "@/components/CartButton";
import Cart from "@/components/Cart";

export default {
  components: {
    CartButton,
    Cart,
    LoadingScreen,
    NavButton,
    Nav
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
