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
import EventBus from "./EventBus";
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
  methods: {
    victoryCheck(num1, num2, num3, num4) {
      const tableData = this.tableData;
      if (tableData[num1][num2] === "" || tableData[num3][num4] === "") {
        return false;
      }
      const num5 = (num1 + num3) / 2;
      const num6 = (num2 + num4) / 2;
      return (
        tableData[num1][num2] == tableData[num5][num6] &&
        tableData[num3][num4] == tableData[num5][num6]
      );
    },
    onClickTd(data) {
      console.log(data);

      if (this.tableData[data.row][data.cell] === "") {
        this.check++;
        this.tableData[data.row][data.cell] = this.turn;
        if (
          this.victoryCheck(0, 0, 0, 2) ||
          this.victoryCheck(1, 0, 1, 2) ||
          this.victoryCheck(2, 0, 2, 2) ||
          this.victoryCheck(0, 0, 2, 0) ||
          this.victoryCheck(0, 1, 2, 1) ||
          this.victoryCheck(0, 2, 2, 2) ||
          this.victoryCheck(0, 0, 2, 2) ||
          this.victoryCheck(0, 2, 2, 0)
        ) {
          this.winner = this.turn;
          this.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
          this.check = 0;
        } else if (this.check == 9) {
          this.winner = "";
          alert("무승부");
          this.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
          this.check = 0;
          this.turn = "O";
        } else {
          this.turn = this.turn === "O" ? "X" : "O";
        }
      }
    },
  },
  computed: {},
  created() {
    EventBus.on("ClickTd", this.onClickTd);
  },
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
