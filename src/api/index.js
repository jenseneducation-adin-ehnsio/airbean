import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

async function addOrder(cart, price) {
  const response = await api.post("/beans", 
    {
      items: cart,
      value: price
    }
  );
  const data = response.data
  return data
}

export { fetchMenu, addOrder };
