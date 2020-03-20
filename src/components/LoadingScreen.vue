<template>
  <div class="loading-page" @click="startLoading" :class="{ fadeout: isLoading }">
    <img src="@/assets/intro-graphic-left.svg" class="border-left" />
    <img src="@/assets/airbean-landing.svg" class="logo" />
    <img src="@/assets/intro-graphic-right.svg" class="border-right" />
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    startLoading() {
      this.isLoading = true;
    }
  }
};
</script>

<style scoped>
.loading-page {
  background: hsl(150, 35%, 40%);
  display: grid;
  width: 500px;
  height: 812px;
  grid-template-columns: 45% 10% 45%;
  grid-template-areas: "border-left logo border-right";
}

.border-left {
  width: 100%;
  height: 100%;
  grid-area: border-left;
  object-fit: cover;
}

.border-right {
  width: 100%;
  height: 100%;
  grid-area: border-right;
  object-fit: cover;
}

.logo {
  grid-area: logo;
  width: 350px;
  margin-top: 300px;
  margin-left: -150px;
  z-index: 1;
}
.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
