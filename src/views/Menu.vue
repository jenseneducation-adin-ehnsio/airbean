<template>
  <div class="menu">
    <LoadingScreen />
    <header>
      <CartButton @click.native="toggleCart" />
    </header>
    <main>
      <Cart v-if="cart"/>
    </main>
  </div>
</template>

<script>

import CartButton from '@/components/CartButton'
import Cart from '@/components/Cart'
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  data: () => {return{
    cart: false
  }},
  components: {
    CartButton, Cart, LoadingScreen
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    toggleCart() {
      this.cart = !this.cart
    }
  }
}

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