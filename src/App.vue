<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // Dispatcha en action till store att kommitta mutation av data menu //
    this.$store.dispatch("fetchMenu");
    // Lägg till id i local storage och dispatch till store//
    if (localStorage.getItem("id")) {
      try {
        let id = JSON.parse(localStorage.getItem("id"));
        this.$store.dispatch("setId", id);
      } catch (e) {
        localStorage.removeItem("id");
      }
    }
    // Lägg till user(name och epost) i local storage och dispatch till store//
    if (localStorage.getItem("user")) {
      try {
        let user = JSON.parse(localStorage.getItem("user"));
        this.$store.dispatch("setUser", user);
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=PT+Serif:400,700|Work+Sans&display=swap");
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
  font-family: "Work Sans", sans-serif;
}
#app {
  font-family: "PT Serif", serif;
  background-color: $color-pink;
  text-align: center;
  color: $color-brown;
  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
}

</style>
