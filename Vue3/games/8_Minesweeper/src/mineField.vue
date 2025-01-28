<template>
  <table>
    <tr v-for="(row, rowIndex) in mineField" :key="rowIndex">
      <td
        v-for="(col, colIndex) in row"
        :key="colIndex"
        :style="cellDataStyle(rowIndex, colIndex)"
        @click="onClickTd(rowIndex, colIndex)"
        @contextmenu.prevent="onRightClickTd(rowIndex, colIndex)"
      >
        {{ cellDataText(rowIndex, colIndex) }}
      </td>
    </tr>
  </table>
</template>
<script>
import { useStore, mapState } from "vuex";
import store, {
  CODE,
  OPEN_CELL,
  FLAG_CELL,
  QUESTION_CELL,
  NORMALIZE_CELL,
  CLICK_MINE,
} from "./store";
export default {
  computed: {
    ...mapState(["mineField", "halted"]),
    cellDataStyle(state) {
      return (row, cell) => {
        switch (store.state.mineField[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: "#444",
            };
          case CODE.CLICKED_MINE:
          case CODE.OPENED:
            return {
              background: "white",
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: "red",
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: "yellow",
            };
          default:
            return {};
        }
      };
    },
    cellDataText() {
      return (row, cell) => {
        switch (store.state.mineField[row][cell]) {
          case CODE.MINE:
            return "";
            return "*";
          case CODE.NORMAL:
            return "";
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            return "!";
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            return "?";
          case CODE.CLICKED_MINE:
            return "펑";
          default:
            return store.state.mineField[row][cell] || "";
        }
      };
    },
  },
  methods: {
    onClickTd(row, cell) {
      if (store.state.halted) {
        return;
      }
      switch (this.mineField[row][cell]) {
        case CODE.NORMAL:
          return store.commit(OPEN_CELL, { row, cell });
        case CODE.MINE:
          return store.commit(CLICK_MINE, { row, cell });
        default:
          return;
      }
    },
    onRightClickTd(row, cell) {
      if (store.state.halted) {
        return;
      }
      switch (this.mineField[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          store.commit(FLAG_CELL, { row, cell });
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          store.commit(QUESTION_CELL, { row, cell });
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          store.commit(NORMALIZE_CELL, { row, cell });
          return;
        default:
          return;
      }
    },
  },
};
</script>
<style scoped>
td {
  width: 30px;
  height: 30px;
  text-align: center;
  border: #000 solid 1px;
}
</style>
