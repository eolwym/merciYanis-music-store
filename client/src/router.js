import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home/Home'
import Albums from './components/Albums/Albums'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/purchase-albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

export default createRouter({
    history: createWebHistory(),
    routes
});
