<template>
  <div class="order-profile">
    <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    <header>
      <img src="../assets/graphics-header.svg" class="border-top" />
      <NavButton class="navButton" v-bind:showNav="navVisible" v-on:navOpen="openNav" />
    </header>
    <div class="profile-info">
      <img src="@/assets/mask.svg" class="photo" />
      <h1>FirstName LastName</h1>
      <p>example@example.com</p>
    </div>
    <div class="order-history">
      <h1>Orderhistorik</h1>
      <div class="item-history">
        <p class="reference">#AB1123282323Z</p>
        <p class="date">DD/MM/YY</p>
        <p class="total">total ordersumma</p>
        <p class="price">XXXkr</p>
        <hr />
      </div>
      <div class="item-history">
        <p class="reference">#AB1123282323Z</p>
        <p class="date">DD/MM/YY</p>
        <p class="total">total ordersumma</p>
        <p class="price">XXXkr</p>
        <hr />
      </div>

      <div class="wrapper-total">
        <p>
          <strong>Total spenderat</strong>
        </p>
        <p class="amount">
          <strong>XXXXkr</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
export default {
  components: { NavButton, Nav },
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
  height: 100vh;
}
.navButton {
  position: fixed;
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
.date,
.price,
.amount {
  text-align: right;
}
</style>