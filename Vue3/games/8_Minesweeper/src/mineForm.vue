<template>
  <form @submit="onSubmitStart">
    <input type="number" :value="row" @change="onChangeRow" />
    <input type="number" :value="cell" @change="onChangeCell" />
    <input type="number" :value="mine" @change="onChangeMine" />
    <button type="submit">시작</button>
  </form>
</template>
<script>
import store, { START_GAME, INCREMENT_TIMER } from "./store";

export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20,
    };
  },
  methods: {
    onChangeRow(e) {
      this.row = e.target.value;
    },
    onChangeCell(e) {
      this.cell = e.target.value;
    },
    onChangeMine(e) {
      this.mine = e.target.value;
    },
    onSubmitStart(e) {
      e.preventDefault();
      store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine,
      });
      store.commit(INCREMENT_TIMER);
    },
  },
};
</script>
