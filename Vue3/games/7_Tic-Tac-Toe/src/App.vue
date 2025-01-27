<!-- src/App.vue -->
<template>
  <div>
    <h1>틱택토</h1>
    <table-component :table-data="tableData" />
    <p>{{ turn }}님의 차례입니다.</p>
    <p v-if="winner">{{ winner }}의 승리입니다.</p>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
export default {
  name: "App",
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
      winner: "",
      check: 0,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  watch: {},
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
