<template>
  <tr>
    <td-component
      v-for="(tdData, index) in trData"
      :key="index"
      :td-data="tdData"
      :td-index="index"
      :tr-index="trIndex"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";
export default {
  name: "TrComponent",
  components: {
    TdComponent,
  },
  props: {
    trData: {
      type: Array,
    },
    trIndex: {
      type: Number,
    },
  },
  data() {
    return {};
  },
};
</script>
