<template>
  <div class="order">
    <div v-if="order.eta" class="order-wrapper">
      <h4>
        Ordernummer
        <strong>{{ order.orderNr }}</strong>
      </h4>

      <img src="@/assets/drone.svg" class="hover" />

      <h2>
        <strong>Din beställning är på väg</strong>
      </h2>
      <p>
        <strong>{{ order.eta }}</strong> minuter
      </p>
    </div>
    <div v-else class="no-order">
      <h2>Du har ingen beställning</h2>
      <p>Besök din profil för att se tidigare ordrar</p>
    </div>
    <router-link to="/">
      <button class="okCool">Ok, cool!</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.state.order;
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: white;
  background-color: $color-orange;
  p {
    font-size: 1.2rem;
  }
}

h2 {
  font-size: 2rem;

  margin-top: 60px;
}

h4 {
  margin-bottom: 50px;
}

h3 > strong {
  font-size: 25px;
}

.okCool {
  margin: 50px auto 0 auto;
  font-size: 1.4rem;
  padding: 20px 40px;
  background-color: white;
  color: black;
  border: none;
  font-weight: 700;
  border-radius: 60px;
  font-family: inherit;
}

.hover {
  animation: drone 2s ease-in-out infinite alternate;
}

@keyframes drone {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
  }
}
</style>
