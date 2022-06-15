import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import LoginView from "../pages/LoginView.vue";
import RestaurantView from "@/pages/RestaurantView.vue";
import DefaultHomeView from "@/pages/DefaultHomeView.vue";
// import AboutView from "store/About";

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        name: "defaultHome",
        component: DefaultHomeView,
      },
      {
        path: "restaurant",
        name: "restaurant",
        component: RestaurantView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "stores/About"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: AboutView,
  // },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
