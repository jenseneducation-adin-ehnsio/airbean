import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}

async function addOrder(cart, price, id) {
  const response = await api.post("/beans", 
    {
      items: cart,
      value: price,
      id: id
    }
  );
  const data = response.data
  return data
}

async function fetchId() {
  const response = await api.get("/beans/key");
  const data = response.data.key;
  return data;
}

async function fetchOrders(id) {
  const response = await api.get("/beans/profile/" + id)
  const data = response.data
  return data
}

export { fetchMenu, addOrder, fetchId, fetchOrders };
