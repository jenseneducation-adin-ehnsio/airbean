import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

async function addOrder() {
  const response = await api.post("/beans", {
    body: {
      'items': "banan",
      'value': 5

      // 'items': this.$store.state.cart,
      // 'value': this.$store.getters.totalPrice
    }
  });
  const data = response.data
  return data
}

export { fetchMenu, addOrder };
