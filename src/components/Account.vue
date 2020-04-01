<template>
  <div class="account">
    <!--  Användares login konto -->
    <img src="@/assets/airbean-landing-black.svg" class="logo" height="60px" />
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik</p>
    <div class="form">
      <label for="name">Namn</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Namn.."
        v-model="user.name"
      />
      <label for="email">Epost</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="din@epost.com"
        v-model="user.email"
      />
      <p>GDPR Ok!</p>
      <div class="round">
        <input type="checkbox" name="gdpr" id="checkbox" v-model="gdpr" />
        <label for="checkbox"></label>
      </div>
      <!--   Visa fel meddelandet om input fields inte fyllt och checkboxen är inte checkat -->
      <p v-show="showFailMsg" class="center">
        Please check all input fields and GDPR to proceed, dear.
      </p>
      <!--   Dispatcha user infon, id:et och ordern till store när man lägger in beställningen -->
      <button @click="saveUser">Brew me a cup!</button>
      <!--   Dispatcha user id och ordern till store när man lägger in beställningen -->
      <p class="center" @click="skip()">Skip</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: ""
      },
      gdpr: false,
      showFailMsg: false
    };
  },
  methods: {
    saveUser() {
      if (
        this.gdpr &&
        this.user.name.length > 1 &&
        this.user.email.length > 1
      ) {
        this.$store.dispatch("setUser", this.user);
        this.$store.dispatch("toggleLogin")
      } else {
        this.showFailMsg = true;
      }
    },
    skip() {
      this.$store.dispatch("toggleLogin")
      this.$store.dispatch("skipLogin")
    }
  }
};
</script>

<style lang="scss" scoped>
.account {
  position: absolute;
  z-index: 999;
  width: 90%;
  min-height: 300px;
  top: 110px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: $color-pink;
  border-radius: 5px;
  padding: 1px 20px 30px 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 0 1000px #00000070;
  h1 {
    margin-top: 0;
  }
}

.logo {
  z-index: 999;
  margin: 10px;
}
.round {
  position: relative;
  padding: 20px;
  // display: flex;
  margin-right: auto;
  justify-content: center;
  align-items: center;

  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 0;
    position: absolute;
    top: 6px;
    width: 20px;
  }
  label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 4px;
    left: 4px;
    opacity: 0;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 8px;
  }
  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }

  input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
}

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  p {
    margin: 0;
    margin-bottom: auto;
    margin-right: auto;
    font-size: 0.6rem;
  }
  > input {
    background-color: inherit;
    border: 1px solid #2f2926;
    border-radius: 6px;
    height: 48px;
    width: 100%;
    padding: 20px;
    margin: 10px;
    font-family: "Work Sans", sans-serif;
  }
  label {
    font-family: "Work Sans", sans-serif;
    font-size: 0.6rem;
    align-self: flex-start;
  }
  .center {
    margin-top: 20px;
    margin-left: auto;
    &:hover {
      cursor: pointer;
    }
  }
}
button {
  font-family: "PT Serif";
  font-style: normal;
  font-weight: bold;
  margin: 50px auto 0 auto;
  font-size: 1.4rem;
  padding: 20px 40px;
  white-space: nowrap;
  background-color: rgb(46, 44, 44);
  color: white;
  border: none;
  border-radius: 60px;
}
</style>
