<template>
  <td @click="onClickTd">{{ tdData }}</td>
</template>

<script>
export default {
  name: "TdComponent",
  components: {},
  props: {
    tdData: {
      type: String,
    },
    tdIndex: {
      type: Number,
    },
    trIndex: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    check(num1, num2, num3, num4) {
      const tableData = this.$root.$data.tableData;
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
    onClickTd() {
      if (this.$root.$data.tableData[this.trIndex][this.tdIndex] === "") {
        this.$root.$data.check++;
        this.$root.$data.tableData[this.trIndex][this.tdIndex] =
          this.$root.$data.turn;
        if (
          this.check(0, 0, 0, 2) ||
          this.check(1, 0, 1, 2) ||
          this.check(2, 0, 2, 2) ||
          this.check(0, 0, 2, 0) ||
          this.check(0, 1, 2, 1) ||
          this.check(0, 2, 2, 2) ||
          this.check(0, 0, 2, 2) ||
          this.check(0, 2, 2, 0)
        ) {
          this.$root.$data.winner = this.$root.$data.turn;
          this.$root.$data.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
          this.$root.$data.check = 0;
        } else if (this.$root.$data.check == 9) {
          this.$root.$data.winner = "";
          alert("무승부");
          this.$root.$data.tableData = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ];
          this.$root.$data.check = 0;
          this.$root.$data.turn = "O";
        } else {
          this.$root.$data.turn = this.$root.$data.turn === "O" ? "X" : "O";
        }
      }
    },
  },
};
</script>
<style>
td {
  text-align: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
}
</style>
