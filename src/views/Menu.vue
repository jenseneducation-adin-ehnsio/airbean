<template>
  <div class="menu">
    <transition name="fade">
      <LoadingScreen v-if="loading" />
    </transition>

    <header>
      <img src="@/assets/graphics-header.svg" class="border-top" />
      <NavButton v-bind:showNav="navVisible" v-on:navOpen="openNav" class="nav-button" />
      <CartButton @click.native="toggleCart" class="cart-button" />
    </header>


    <main class="main">
    <Cart v-if="cart" />
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
      <MenuList />
    </main>
    <footer>
      <img src="@/assets/graphics-footer.svg" class="border-bottom" />
    </footer>
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
      navVisible: true,
    };
  },

  computed: {
    menu() {
      return this.$store.state.menu;
    },
    loading() {
      return this.$store.state.loading;
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
    },
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: $color-pink;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.main {
  min-height: 500px;
}
header {
  display: flex;
  width: 100%;
  height: 120px;
  flex-direction: row;
}
footer {
  display: flex;
  height: 120px;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  margin-top: auto;
}
.fade-leave-active {
  transition: all 1s ease-in-out;
}
.fade-leave-active {
  opacity: 0;
}
.border-bottom, .border-top {
  position: absolute;
  z-index: 2;
  width: 100%;
}

.cart-button, .nav-button {
  position: relative;
  z-index: 4;
}
.nav-button {
  position: fixed;
  z-index: 4;
}
</style>
