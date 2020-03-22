<template>
  <div class="about">
    <header>
      <img src="../assets/graphics-header.svg" class="border-top" />
      <NavButton class="navButton" v-bind:showNav="navVisible" v-on:navOpen="openNav" />
      <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    </header>
    <section class="info">
      <h1>Vårt kaffe</h1>
      <p>
        <strong>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus dolorum unde obcaecati sint, officiis molestias incidunt voluptates inventore, ut omnis odit. Animi architecto rerum porro nihil
          , numquam reprehenderit placeat libero.
        </strong>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit nesciunt nam perspiciatis veritatis natus sequi suscipit aperiam autem sit hic ipsa,
        ipsam ea optio atque accusamus facere voluptatum quidem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi ut error sequi, cumque molestiae at est officia non optio vel deleniti
        quis harum ratione quisquam porro commodi suscipit explicabo!
      </p>
    </section>
    <section class="profile">
      <img src="../assets/eva-cortado.jpg" class="profile-eva" />
      <h2>Eva Cortado</h2>
      <h5>VD & Grundare</h5>
    </section>
    <footer>
      <img src="../assets/graphics-footer.svg" class="border-bottom" />
    </footer>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import Nav from "@/components/Nav";
export default {
  components: { NavButton, Nav },

  data: () => {
    return {
      navVisible: true
    };
  },
  methods: {
    closeNav() {
      this.navVisible = true;
    },
    openNav() {
      this.navVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: #fdeded;
}

.border-top,
.border-bottom {
  width: 100%;
}
.navButton {
  position: absolute;
  margin-top: 10px;
  margin-left: -480px;
}
h1 {
  font-size: 3rem;
}
.info {
  text-align: left;
  padding: 0 50px;
  line-height: 25px;
  margin-bottom: 80px;
}

.profile-eva {
  border-radius: 50%;
  width: 20%;
}

h2 {
  margin-bottom: 0;
}

h5 {
  margin-top: 5px;
}
</style>
