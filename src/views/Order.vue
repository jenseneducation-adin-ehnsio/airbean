<template>
  <div class="order">
    <h4>{{order.orderNr}}</h4>
    <h3>{{order.eta}}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.order
    }
  }
};
</script>

<style>
 
</style>