<template>
  <div class="about">
    <!--  Navigation meny med alla länkar -->
    <Nav v-bind:showNav="navVisible" v-on:navClose="closeNav" />
    <header>
      <img src="../assets/graphics-header.svg" class="border-top" />
      <!--  Hamburger menu knapp att toggla navigation meny  -->
      <NavButton
        class="navButton"
        v-bind:showNav="navVisible"
        v-on:navOpen="openNav"
      />
    </header>
    <!--  About info  -->
    <section class="info">
      <h1>Vårt kaffe</h1>
      <p>
        <strong
          >Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
          grounds dripper, crema, strong whipped, variety extra iced id lungo
          half and half mazagran. Pumpkin spice.</strong
        >
      </p>

      <p>
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
      </p>

      <p>
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
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
header {
  display: flex;
  height: 120px;
  flex-direction: row;
  width: 100%;
}
footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
}
.about {
  background: $color-pink;
  position: relative;
  width: 100%;
}

.border-top,
.border-bottom {
  width: 100%;
  position: absolute;
}

.navButton {
  position: fixed;
}
h1 {
  font-size: 3rem;
}
.info {
  text-align: left;
  padding: 0 50px;
  line-height: 30px;
  margin-bottom: 80px;
}

p {
  margin-bottom: 30px;
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
.profile {
  margin-bottom: 100px;
}
</style>
