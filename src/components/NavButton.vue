<template>
  <!-- Navigation button -->
  <button @click="emitOpen">
    <img src="@/assets/navicon.svg" height="14px" />
  </button>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    showNav: Boolean
  },
  methods: {
    emitOpen() {
      this.$emit("navOpen");
    }
  }
};
</script>

<style scoped>
button {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  /* margin: 25px auto 0 25px; */
  background-color: white;
}
</style>
