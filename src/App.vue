<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchMenu");
    if(localStorage.getItem('id')) {
      try {
        let id = JSON.parse(localStorage.getItem('id'));
        this.$store.dispatch('setId', id)
      } catch(e) {
        localStorage.removeItem('id');
      }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Serif:400,700|Work+Sans&display=swap');
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
p {
  font-family: 'Work Sans', sans-serif;
}
#app {
  font-family: 'PT Serif', serif;
  background-color: $color-pink;
  text-align: center;
  color: $color-brown;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
