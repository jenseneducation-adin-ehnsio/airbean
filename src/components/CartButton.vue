<template>
  <button>
    <!--  Räkna ut number of items i cart som visar i röda rund cirkel -->
    <img src="@/assets/bag.svg" alt="" />
    <div v-if="numberOfCartItems > 0" class="counter">
      {{ numberOfCartItems }}
    </div>
  </button>
</template>

<script>
export default {
  computed: {
    numberOfCartItems() {
      return this.$store.getters.numberOfCartItems;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  // margin: 25px 25px 0 auto;
  border: none;
  background: $color-brown;
  &:focus {
    outline: 0;
  }
  img {
    height: 40%;
  }
  .counter {
    height: 24px;
    width: 24px;
    color: white;
    background-color: $color-orange;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -10px;
    right: 0;
  }
}
</style>
