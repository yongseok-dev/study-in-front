<!-- src/App.vue -->
<template>
  <div>
    <h1>숫자야구 게임</h1>
    <form @submit="onSubmitForm">
      <input type="text" v-model="input" />
      <button>입력</button>
    </form>
    <p>시도: {{ msg.length }}</p>
    <ul>
      <li v-for="msg in msg">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: [
        Math.ceil(Math.random() * 9),
        Math.ceil(Math.random() * 9),
        Math.ceil(Math.random() * 9),
        Math.ceil(Math.random() * 9),
      ],
      input: undefined,
      msg: [],
    };
  },
  methods: {
    onSubmitForm(e) {
      console.log(this.result);
      e.preventDefault();
      let num1 = 0;
      let num2 = 0;
      const preInput = this.input;
      this.input = undefined;
      let tempValue = this.value.map((e) => e);
      let tempInput = String(preInput).split("");

      for (let i = 0; i < 4; i++) {
        if (tempValue[i] == tempInput[i]) {
          console.log("스트라이크" + tempValue[i]);
          num1++;
          tempValue[i] = undefined;
          tempInput[i] = undefined;
        }
      }
      for (let i = 0; i < 4; i++) {
        if (tempInput[i] != undefined) {
          for (let j = 0; j < 4; j++) {
            if (tempInput[i] == tempValue[j]) {
              console.log("볼" + tempValue[j]);
              num2++;
              tempValue[j] = undefined;
              break;
            }
          }
        }
      }

      if (num1 == 4) {
        this.msg.push(`${preInput}: 홈런 ~~ !!`);
      } else {
        this.msg.push(`${preInput}: ${num1} 스트라이크, ${num2} 볼입니다.`);
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
