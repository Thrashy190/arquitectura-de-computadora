import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/inicio",
    name: "Home",
    component: Home,
  },
  {
    path: "/unidad_uno",
    name: "Unidad1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "unidad1" */ "../views/Unidad1.vue"),
  },
  {
    path: "/unidad_dos",
    name: "Unidad2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "unidad2" */ "../views/Unidad2.vue"),
  },
  {
    path: "/unidad_tres",
    name: "Unidad3",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "unidad3" */ "../views/Unidad3.vue"),
  },
  {
    path: "/unidad_cuatro",
    name: "Unidad4",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "unidad4" */ "../views/Unidad4.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
