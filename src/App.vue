<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchMenu");
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
button:hover {
  cursor: pointer;
}
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  min-height: 812px;
  margin: 0 auto;
}
</style>
