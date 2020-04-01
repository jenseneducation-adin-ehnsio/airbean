<template>
  <div class="menu-list">
    <h1>Meny</h1>
    <!--  Loopar över menu från APIet -->
    <div v-for="item in menu" :key="item.id" class="menu-items">
      <!--  Binda item med loopen med komponenten och visas varje item  -->
      <MenuItem :item="item" />
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
  components: { MenuItem },
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  position: relative;
}
</style>
