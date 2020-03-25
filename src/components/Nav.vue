<template>
  <div class="nav" @click="emitVisible" :class="{ close: showNav }">
    <button>
      <img src="@/assets/close.svg" class="nav-button" />
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
  methods: {
    emitVisible() {
      this.$emit("navClose");
    }
  }
};
</script>

<style scoped>
.nav {
  font-size: 2rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2f2926;
  opacity: 0.95;
  z-index: 2;
  padding: 25px;
  cursor: pointer;
}

a:link,
a:visited {
  color: white;
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
  width: 80px;
  height: 80px;
  border: 2px solid black;
  border-radius: 50%;
  margin-bottom: 100px;
}

.nav-button {
  width: 40%;
}

.close {
  display: none;
}
</style>
