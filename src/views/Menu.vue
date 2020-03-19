<template>
  <div class="menu">
    <!--  <LoadingScreen /> -->
    <NavButton />
    <Nav />
    <!--  <p>{{ menu }}</p> -->
  </div>
</template>

<script>
/* import LoadingScreen from "@/components/LoadingScreen"; */
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
export default {
  components: { /* LoadingScreen, */ NavButton, Nav },

  computed: {
    menu() {
      return this.$store.state.menu;
    }
  }
};
</script>
