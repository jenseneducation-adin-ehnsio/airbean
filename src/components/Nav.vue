<template>
  <div class="nav" :class="{ close: showNav }">
    <button @click="emitVisible">
      <img src="../assets/close.svg"  />
    </button>
    <router-link to="/" class="link">Meny</router-link>
    <hr />
    <router-link to="/about" class="link">Vårt kaffe</router-link>
    <hr />
    <router-link to="/order" class="link">Orderstatus</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    showNav: Boolean
  },
  /*  data() {
    return {
      navVisible: false
    };
  }, */
  methods: {
    emitVisible() {
      this.$emit("navClose");
    }
    /* closeNav() {
      console.log("i am clicked");
      this.navVisible = true;
    } */
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  color: white;
  font-size: 2rem;
}
.nav {
  width: 500px;
  height: 812px;
  display: flex;
  flex-direction: column;
  background-color: #332b2b;
  padding: 20px;
}

hr {
  width: 10%;
  margin: 5% 45%;
  opacity: 0.3;
}

.link {
  text-decoration: none;
}

button {
  width: 15%;
  height: 75px;
  border: 2px solid black;
  border-radius: 50%;
  margin-bottom: 100px;
}

img {
  width: 40%;
}

.close {
  display: none;
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}
</style>
