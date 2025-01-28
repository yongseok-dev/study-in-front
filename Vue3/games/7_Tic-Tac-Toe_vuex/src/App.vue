<!-- src/App.vue -->
<template>
  <div>
    <h1>틱택토</h1>
    <table-component :table-data="tableData" />
    <p>{{ turn }}님의 차례입니다.</p>
    <p v-if="noWinner">{{ noWinner }}</p>
    <p v-if="winner">{{ winner }}의 승리입니다.</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import TableComponent from "./TableComponent";

export default {
  name: "App",
  components: {
    TableComponent,
  },
  setup() {
    const store = useStore();

    const tableData = computed(() => store.getters.getTableData);
    const turn = computed(() => store.getters.getTurn);
    const winner = computed(() => store.getters.getWinner);
    const noWinner = computed(() => store.getters.getNoWinner);

    const resetGame = () => {
      store.dispatch("resetGame");
    };

    return {
      tableData,
      turn,
      winner,
      noWinner,
      resetGame,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
