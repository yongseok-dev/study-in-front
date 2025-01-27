<!-- src/App.vue -->
<template>
  <div id="imgBox" :class="computerChoice" @click="onClickImage"></div>
  <div>
    <input
      type="button"
      @click="onClickUser(computerChoiceList.바위)"
      value="바위"
    />
    <input
      type="button"
      @click="onClickUser(computerChoiceList.가위)"
      value="가위"
    />
    <input
      type="button"
      @click="onClickUser(computerChoiceList.보)"
      value="보"
    />
    <p>{{ msg }}</p>
    <p>현재 {{ score }}점</p>
  </div>
</template>

<script>
const computerChoiceList = {
  가위: "scissors",
  바위: "rock",
  보: "paper",
};
let interval = null;
export default {
  name: "App",
  data() {
    return {
      computerChoiceList,
      score: 0,
      msg: "",
      computerChoice: computerChoiceList.보,
    };
  },
  computed: {},
  mounted() {
    interval = setInterval(() => {
      this.computerChoice =
        Object.values(computerChoiceList)[Math.ceil(Math.random() * 3) - 1];
    }, 50);
  },
  beforeDestroy() {
    clearInterval(interval);
  },
  methods: {
    onClickUser(userChoice) {
      clearInterval(interval);
      this.victoryDecision(this.computerChoice, userChoice);
      setTimeout(() => {
        interval = setInterval(() => {
          this.computerChoice =
            Object.values(computerChoiceList)[Math.ceil(Math.random() * 3) - 1];
        }, 50);
      }, 1000);
    },
    victoryDecision(computerChoice, userChoice) {
      let victoryScore = 0;
      if (computerChoice == userChoice) {
      } else if (computerChoice == computerChoiceList.바위) {
        if (userChoice == computerChoiceList.보) {
          victoryScore++;
        } else if (userChoice == computerChoiceList.가위) {
          victoryScore--;
        }
      } else if (computerChoice == computerChoiceList.가위) {
        if (userChoice == computerChoiceList.바위) {
          victoryScore++;
        } else if (userChoice == computerChoiceList.보) {
          victoryScore--;
        }
      } else if (computerChoice == computerChoiceList.보) {
        if (userChoice == computerChoiceList.가위) {
          victoryScore++;
        } else if (userChoice == computerChoiceList.바위) {
          victoryScore--;
        }
      }

      if (victoryScore == 0) {
        this.msg = "비겼습니다.";
      } else if (victoryScore < 0) {
        this.msg = "졌습니다!";
        this.score--;
      } else {
        this.msg = "이겼습니다!";
        this.score++;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
#imgBox {
  width: 300px;
  height: 300px;
}
#imgBox.scissors {
  background: url(https://i.namu.wiki/i/lqg5Zj-DMjKqCK5-W1jA6P4e5b0QWOS43mOajShEaxEA73wmp-pNI7oAFEI0MJkOylBWNu962a2Sm6o_unsrcBQ6eaNSepzDkQ_jsPOvJfpKTvgXJHgwR_J6N__hajSlBm4Y5s5-mG4RNePUPpg59A.webp);
  background-position: -65px -20px;
  background-repeat: no-repeat;
}
#imgBox.rock {
  background: url(https://i.namu.wiki/i/lqg5Zj-DMjKqCK5-W1jA6P4e5b0QWOS43mOajShEaxEA73wmp-pNI7oAFEI0MJkOylBWNu962a2Sm6o_unsrcBQ6eaNSepzDkQ_jsPOvJfpKTvgXJHgwR_J6N__hajSlBm4Y5s5-mG4RNePUPpg59A.webp);
  background-position: -350px -30px;
  background-repeat: no-repeat;
}
#imgBox.paper {
  background: url(https://i.namu.wiki/i/lqg5Zj-DMjKqCK5-W1jA6P4e5b0QWOS43mOajShEaxEA73wmp-pNI7oAFEI0MJkOylBWNu962a2Sm6o_unsrcBQ6eaNSepzDkQ_jsPOvJfpKTvgXJHgwR_J6N__hajSlBm4Y5s5-mG4RNePUPpg59A.webp);
  background-position: -630px -50px;
  background-repeat: no-repeat;
}
</style>
