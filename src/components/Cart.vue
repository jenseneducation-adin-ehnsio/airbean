<template>
  <div>
    <!-- Loading order sida (overlay) visas när ordern är skickat -->
    <div v-if="loadingOrder" class="loader">
      <img src="@/assets/loader.png" alt="" />
      <p>Jobbar på din order..</p>
    </div>
      <div class="tag"></div>
    <div class="cart">
      <!--    Shopping cart med items som user lägger till. Loppar ut arrayen när det blir fler items -->
      <h1>Din beställning</h1>
      <div v-for="item in cart" :key="item.id" class="cart-items">
        <CartItem :item="item" />
      </div>
      <div class="total-price">
        <h2>Total</h2>
        <p>
          ..........................................................................
        </p>
        <h2 class="total">{{ totalPrice }} kr</h2>
      </div>
      <p>inkl moms + drönarleverans</p>
      <!-- Om user infon finns inte i local storage, visar login sidan. Annars lägg till ordern -->
      <button @click="tryPlaceOrder">
        Take my money!
      </button>
      <!--   Om det finns ingenting i cart, visar meddelandet när man försöker att skickar ordern-->
      <p v-if="emptyMsg" class="empty-cart">Your cart is empty</p>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";

export default {
  data: () => {
    return {
      emptyMsg: false
    };
  },
  components: {
    CartItem
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    user() {
      return this.$store.state.user;
    },
    loadingOrder() {
      return this.$store.state.loadingOrder;
    },
    userSkip() {
      return this.$store.state.userSkip
    }
  },
  methods: {
    async placeOrder() {
      this.$store.state.loadingOrder = true;
      if(!this.user.id) {
        await this.$store.dispatch("setId")
      }
      await this.$store.dispatch("placeOrder");
      this.$store.state.loadingOrder = false;
      this.$router.push("/order");
    },
    tryPlaceOrder() {
      if (this.cart.length < 1) {
        this.emptyCart();
      } else if (this.userSkip) {
        this.placeOrder();
      } else if (!this.user.name) {
        this.$store.dispatch("toggleLogin")
      } else {
        this.placeOrder();
      }
    },
    emptyCart() {
      this.emptyMsg = true;
      setTimeout(() => {
        this.emptyMsg = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0 auto;
  max-width: 500px;
  border-radius: 5px;
  z-index: 888;
  color: white;
  backdrop-filter: brightness(30%);
  img {
    margin-top: 250px;
    margin-bottom: 10px;
  }
}
.cart {
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  z-index: 886;
  width: 90%;
  min-height: 300px;
  max-height: 80vh;
  top: 95px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff;
  border-radius: 5px;
  padding: 1px 20px 30px 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 0 1000px #00000070;
  overflow: scroll;
  button {
    margin: 50px auto 0 auto;
    font-size: 1.4rem;
    padding: 20px 40px;
    white-space: nowrap;
    background-color: rgb(46, 44, 44);
    color: white;
    border: none;
    font-family: inherit;
    font-weight: 700;
    border-radius: 60px;
  }
  p {
    text-align: left;
  }
  .empty-cart {
    text-align: center;
  }
  
  h1 {
    margin-top: 50px;
    font-size: 2rem;
  }
  .total-price {
    display: flex;
    align-items: flex-end;
    margin-top: 70px;
    h2 {
      margin: 0;
      font-size: 1.5rem;
      white-space: nowrap;
    }
    p {
      margin: 0 25px 2px 10px;
      overflow: hidden;
    }
    .total {
      margin-left: auto;
    }
  }
}
  .tag {
    height: 30px;
    width: 30px;
    background-color: white;
    position: absolute;
    right: 40px;
    top: 85px;
    transform: rotate(45deg);
    z-index: 887;
    border-radius: 3px;
  }
</style>
