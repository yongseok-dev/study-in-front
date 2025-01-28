<!-- src/App.vue -->
<template>
  <div>
    <h1>뷰라우터</h1>
    <div>
      <router-link to="/number-baseball">숫자야구</router-link>
      <router-link to="/number-baseball">숫자야구</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router";
export default {
  router,
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
