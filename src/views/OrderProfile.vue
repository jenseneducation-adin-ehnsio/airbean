<template>
  <div class="order-profile">
    <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    <header>
      <img src="../assets/graphics-header.svg" class="border-top" />
      <NavButton
        class="navButton"
        v-bind:showNav="navVisible"
        v-on:navOpen="openNav"
      />
    </header>
    <div class="profile-info">
      <img src="@/assets/mask.svg" />
      <p class="name">Example</p>
      <p class="email">example@example.com</p>
    </div>
    <div class="order-history">
      <hr />
      Total spenderat
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

<style></style>
