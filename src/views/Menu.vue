<template>
  <div class="menu">
    <!-- <LoadingScreen /> -->
    <!-- <NavButton v-on:openNav="openNav()" /> -->
    <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    <!--  <p>{{ menu }}</p> -->
  </div>
</template>

<script>
/* import LoadingScreen from "@/components/LoadingScreen"; */
/* import NavButton from "@/components/NavButton"; */
import Nav from "@/components/Nav";
export default {
  components: { /*LoadingScreen ,  NavButton , */ Nav },

  data() {
    return {
      navVisible: false
    };
  },

  computed: {
    menu() {
      return this.$store.state.menu;
    }
  },
  methods: {
    closeNav() {
      /* close the page when someone click on x button  */
      this.navVisible = true;
    }
  }
};
</script>
