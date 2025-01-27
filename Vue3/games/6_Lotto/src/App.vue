<!-- src/App.vue -->
<template>
  <p>당첨 숫자</p>
  <span v-for="(number, index) in lottoNumbers" :key="index">
    <lotto-ball :number="number" />
  </span>
  <p>보너스!</p>
  <LottoBall v-show="bonuses" :number="bonuses" />
  <button v-show="bonuses" @click="onClickButton">한번더 ~</button>
</template>

<script>
import LottoBall from "./LottoBall"; // 컴포넌트 임포트

const minNumber = 1;
const maxNumber = 46;

export default {
  name: "App",
  components: {
    LottoBall,
  },
  data() {
    return {
      lottoNumbers: [],
      bonuses: 0,
    };
  },
  computed: {},
  mounted() {
    this.getLotto();
  },
  beforeDestroy() {},
  methods: {
    // 지연을 생성하는 함수
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    // 컴퓨터의 선택을 생성하는 함수
    getComputerChoice() {
      return Math.ceil(Math.random() * maxNumber);
    },
    onClickButton() {
      this.lottoNumbers.length = 0;
      this.bonuses = 0;
      // this.getLotto();
    },
    async getLotto() {
      for (let i = 0; i < 6; ) {
        const element = this.getComputerChoice();
        console.log(element);

        if (!this.lottoNumbers.includes(element)) {
          await this.delay(1000); // 1초 지연
          this.lottoNumbers.push(element);
          i++; // 고유한 번호가 생성될 때만 카운터 증가
        } else {
          console.log("중복된 번호 발생, 다시 시도합니다.");
        }
      }
      for (let i = 0; i < 1; ) {
        const element = this.getComputerChoice();
        console.log(element);
        if (!this.lottoNumbers.includes(element)) {
          await this.delay(1000); // 1초 지연
          this.bonuses = element;
          i++; // 고유한 번호가 생성될 때만 카운터 증가
        } else {
          console.log("중복된 번호 발생, 다시 시도합니다.");
        }
      }

      console.log(
        "생성된 로또 번호:",
        this.lottoNumbers,
        "보너스:",
        this.bonuses
      );
    },
  },
  watch: {
    bonuses(val, oldval) {
      if (val === 0) {
        this.getLotto();
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
