import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});
// Börja hämta datan från URLen ///
async function fetchMenu() {
  const response = await api.get("/beans");
  const data = response.data.menu;
  return data;
}
// Post ordern med egenskaper items, value och item id ///
async function addOrder(cart, price, id) {
  const response = await api.post("/beans", {
    items: cart,
    value: price,
    id: id
  });
  const data = response.data;
  return data;
}

/// Hämta user id(uuid) /////
async function fetchId() {
  const response = await api.get("/beans/key");
  const data = response.data.key;
  return data;
}

// Hämta ordern efter id:et (uuid)///
async function fetchOrders(id) {
  const response = await api.get("/beans/profile/" + id);
  const data = response.data;
  return data;
}

export { fetchMenu, addOrder, fetchId, fetchOrders };
