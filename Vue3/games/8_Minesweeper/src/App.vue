<!-- src/App.vue -->
<template>
  <div>
    <h1>지뢰찾기</h1>
    <mine-form />
    <div>
      <p>{{ secondsCounter }}</p>
      <mine-filed />
      <p v-if="victory">{{ victory }}</p>
      <!-- <button @click="handleVictory">종료</button> -->
    </div>
  </div>
</template>

<script>
import mineForm from "./mineForm";
import mineFiled from "./mineField";

import { useStore, mapState } from "vuex";
import { computed } from "vue";

export default {
  name: "App",
  components: { mineForm, mineFiled },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["secondsCounter", "victory"]),
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
