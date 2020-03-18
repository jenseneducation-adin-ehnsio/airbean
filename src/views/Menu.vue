<template>
  <div class="menu">
    <p>{{menu}}</p>
  </div>
</template>

<script>


export default {
  computed: {
    menu() {
      return this.$store.state.menu
    }
  },
}
</script>
