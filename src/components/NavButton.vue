<template>
  <button  @click="emitOpen">
    <img src="@/assets/navicon.svg" />
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
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;
  margin: 25px auto 0 25px;

}
</style>
