<!-- src/TdComponent.vue -->

<template>
  <td @click="onClickTd">{{ tdData }}</td>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import {
  SET_WINNER,
  CLICK_CELL,
  CHANGE_TURN,
  RESET_GAME,
  NO_WINNER,
} from "./store";

export default {
  name: "TdComponent",
  props: {
    tdData: {
      type: String,
      required: true,
    },
    tdIndex: {
      type: Number,
      required: true,
    },
    trIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const onClickTd = () => {
      store.dispatch("clickCell", { row: props.trIndex, cell: props.tdIndex });
      console.log(
        `Clicked cell at row ${props.trIndex}, cell ${props.tdIndex}`
      );
    };

    return {
      onClickTd,
    };
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
