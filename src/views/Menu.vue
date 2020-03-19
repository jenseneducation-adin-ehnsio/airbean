<template>
  <div class="menu">
    <LoadingScreen />
    <!--  <p>{{menu}}</p> -->
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: { LoadingScreen },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  }
};
</script>
