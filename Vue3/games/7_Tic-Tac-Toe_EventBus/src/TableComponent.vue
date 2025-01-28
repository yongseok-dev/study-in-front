<template>
  <table>
    <tr-component
      v-for="(trData, index) in tableData"
      :key="index"
      :tr-data="trData"
      :tr-index="index"
    >
    </tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent";
export default {
  name: "TableComponent",
  components: {
    TrComponent,
  },
  props: {
    tableData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
