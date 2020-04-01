<template>
  <!-- Navigation meny med alla länkar -->
  <div class="nav" @click="emitVisible" :class="{ close: showNav }">
    <button>
      <img src="@/assets/close.svg" class="nav-button" />
    </button>
    <router-link to="/menu" class="link">Meny</router-link>
    <hr />
    <router-link to="/about" class="link">Vårt kaffe</router-link>
    <hr />
    <router-link to="/profile" class="link">Min Profil</router-link>
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

<style lang="scss" scoped>
.nav {
  max-width: 500px;
  font-size: 2rem;
  position: fixed;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-brown;
  /* opacity: 0.95; */
  z-index: 999;
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
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  margin-bottom: 100px;
  background-color: white;
}

.nav-button {
  width: 40%;
}

.close {
  display: none;
}
</style>
