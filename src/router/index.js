import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/portafolio",
    name: "portafolio",
    component: () => import("../views/MyPortafolio.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/MyBlogs.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/MyContact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
