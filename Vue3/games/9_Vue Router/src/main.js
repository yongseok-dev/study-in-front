// src/main.js

// createApp: Vue 3 전용 API
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

// App.vue 컴포넌트를 root(#app) 영역에 마운트
createApp(App).use(store).use(router).mount("#app");
