// src/router.js
import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./HomeView.vue";
import NumberBaseball from "../../3_baseball/src/App";

const routes = [
  { path: "/", component: HomeView },
  { path: "/number-baseball", component: NumberBaseball },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
