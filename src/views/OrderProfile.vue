<template>
  <div class="order-profile">
    <!--  Navigation meny med alla länkar -->
    <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    <header>
      <img src="../assets/graphics-header.svg" class="border-top" />
      <!--  Hamburger menu knapp att toggla navigation meny  -->
      <NavButton
        class="navButton"
        v-bind:showNav="navVisible"
        v-on:navOpen="openNav"
      />
    </header>
    <div class="profile-info">
      <img src="@/assets/mask.svg" class="photo" />
      <!--  Här visas user namn och epost -->
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
      <h1 v-show="!user.name">Inloggad som gäst</h1>
      <p v-show="!user.name" @click="createProfile">Skapa profil</p>
    </div>
    <!-- Create account -->
    <Account v-show="showLogin" />
    <div class="order-history">
      <h1>Orderhistorik</h1>
      <!--  Loopar över orderar i orderHistory arrayen och visas  -->
      <div
        class="item-history"
        v-for="order in orderHistory"
        :key="order.orderNr"
      >
        <p class="reference">{{ order.orderNumber }}</p>
        <p class="date">{{ order.timeStamp | formatDate }}</p>
        <p class="total">total ordersumma</p>
        <p class="price">{{ order.totalValue }}kr</p>
        <hr />
      </div>
      <hr class="total-line" />
      <div class="wrapper-total">
        <p>
          <strong>Total spenderat</strong>
        </p>
        <p class="amount">
          <!--  Loopar över totalValue och visar totalsumman  -->
          <strong>{{ totalSpent }}kr</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var moment = require("moment");
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
import Account from "@/components/Account"
export default {
  components: { NavButton, Nav, Account },
  data: () => {
    return {
      navVisible: true
    };
  },
  methods: {
    closeNav() {
      this.navVisible = true;
    },
    openNav() {
      this.navVisible = false;
    },
    createProfile() {
      this.$store.dispatch("toggleLogin")
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    orderHistory() {
      return this.$store.state.orderHistory;
    },
    totalSpent() {
      return this.$store.getters.totalSpent;
    },
    showLogin() {
      return this.$store.state.showLogin
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(value).format("DD/MM/YYYY");
      }
    }
  },
  created() {
    if (!this.user.id) {
      this.$store.dispatch("setId");
    } else {
      this.$store.dispatch("getOrders", this.user.id);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 120px;
  flex-direction: row;
  width: 100%;
}
.order-profile {
  background: $color-brown;
  color: white;
  position: relative;
  width: 100%;
  min-height: 100vh;
}
.navButton {
  position: fixed;
  top: 25px;
  left: 25px;
}
.border-top {
  width: 100%;
  position: absolute;
}
.photo {
  width: 30%;
  margin-top: 60px;
  border: solid 5px $color-orange;
  border-radius: 50%;
  background: rgb(233, 210, 210);
  padding: 20px;
}
p {
  font-size: 1.2rem;
}
p:nth-child(3),
p:nth-child(4) {
  opacity: 0.5;
}
.order-history {
  padding: 40px;
  text-align: left;
}
.item-history {
  display: grid;
  grid-template-columns: 50% 50%;
}

.wrapper-total {
  display: flex;
  justify-content: space-between;
}
.item-history > p,
.wrapper-total > p {
  margin: 0;
}
.item-history > hr {
  width: 200%;
  margin-top: 20px;
  opacity: 0.1;
}
.total-line {
  margin-top: -10px;
  margin-bottom: 20px;
}
.date,
.price,
.amount {
  text-align: right;
}
</style>
