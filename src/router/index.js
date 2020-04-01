import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "@/views/Menu.vue";
import About from "@/views/About.vue";
import Order from "@/views/Order.vue";
import Profile from "@/views/OrderProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/menu",
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
