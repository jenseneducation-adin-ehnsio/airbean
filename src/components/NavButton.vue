<template>
  <button>
    <img src="@/assets/navicon.svg" @click="emitOpen" />
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
  width: 15%;
  height: 75px;
  border: 2px solid black;
  border-radius: 50%;
}
</style>
