<template>
  <div class="nav">
    <router-link to="/" class="link">Meny</router-link>
    <router-link to="/about" class="link">Vårt kaffe</router-link>
    <router-link to="/order" class="link">Orderstatus</router-link>
  </div>
</template>

<script>
export default {};
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
  background-color: #2c1d1b;
}

.link {
  text-decoration: none;
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
