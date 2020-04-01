<template>
  <div class="menu">
    <!-- Loading screen som visas i 2sec -->
    <transition name="fade">
      <LoadingScreen v-if="loading" />
    </transition>

    <header>
      <img src="@/assets/graphics-header.svg" class="border-top" />
      <!--  Hamburger menu knapp att toggla navigation meny   -->
      <NavButton
        v-bind:showNav="navVisible"
        v-on:navOpen="openNav"
        class="nav-button"
      />
      <!--  Shopping cart knapp att toggla cart  -->
      <CartButton @click.native="toggleCart" class="cart-button" />
    </header>

    <!--  Login sidan som visas när man har inte loggat in innan man skickar ordern -->
    <Account v-show="showLogin" />


    <main class="main">
      <!--  Shopping cart som visar orderar innan det skickas in  -->
      <Cart v-if="cart" />
      <!--  Navigation meny med alla länkar -->
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
      <!--  Meny list -->
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
import LoadingScreen from "@/components/LoadingScreen";
import MenuList from "@/components/MenuList";
import Account from "@/components/Account";

export default {
  components: {
    CartButton,
    Cart,
    LoadingScreen,
    NavButton,
    Nav,
    MenuList,
    Account
  },
  data: () => {
    return {
      cart: false,
      navVisible: true
    };
  },

  computed: {
    menu() {
      return this.$store.state.menu;
    },
    loading() {
      return this.$store.state.loading;
    },
    showLogin() {
      return this.$store.state.showLogin;
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
  min-height: 100vh;
  width: 100%;
  background-color: $color-pink;
  overflow: overlay;
  display: flex;
  flex-direction: column;
}
.main {
  min-height: 500px;
}
header {
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: row;
}
footer {
  margin-top: auto;
  display: flex;
  height: 100px;
  width: 100%;
  max-width: 500px;
  bottom: 0;
  img {
    margin-top: auto;
  }
}
.fade-leave-active {
  transition: all 1s ease-in-out;
}
.fade-leave-active {
  opacity: 0;
}
.border-bottom,
.border-top {
  z-index: 2;
  width: 100%;
}

.border-top {
  position: absolute;
}

.cart-button {
  position: absolute;
  z-index: 4;
  top: 25px;
  right: 25px;
}
.nav-button {
  position: fixed;
  z-index: 4;
  top: 25px;
  left: 25px;
}
</style>
