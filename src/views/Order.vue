<template>
  <div class="order">
    <h4>
      Ordernummer
      <strong>{{order.orderNr}}</strong>
    </h4>

    <img src="@/assets/drone.svg" class="hover" />

    <h2>
      <strong>Din beställning är på väg</strong>
    </h2>
    <h3>
      <strong>{{order.eta}}</strong> minuter
    </h3>
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
  display: flex;
  flex-direction: column;
  padding: 50px;
}

h2 {
  font-size: 2rem;
  padding: 0 80px;
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
  font-size: 2.2rem;
  padding: 20px 40px;
  background-color: white;
  color: black;
  border: none;
  font-weight: 600;
  border-radius: 60px;
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