<template>
  <div class="lotto-ball" :style="{ backgroundColor: numberColor }">
    {{ number }}
  </div>
</template>

<script>
export default {
  name: "LottoBall",
  data() {
    return {};
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    numberColor() {
      if (this.number <= 15) {
        return "#FF5733"; // 빨강
      } else if (this.number <= 30) {
        return "#33FF57"; // 초록
      } else {
        return "#3357FF"; // 파랑
      }
    },
  },
};
</script>

<style scoped>
.lotto-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}
</style>
