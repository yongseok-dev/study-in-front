<template>
  <td @click="onClickTd">{{ tdData }}</td>
</template>

<script>
import EventBus from "./EventBus";
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
    onClickTd() {
      EventBus.emit("ClickTd", { row: this.trIndex, cell: this.tdIndex });
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
