<!-- src/App.vue -->
<template>
  <div>
    <h1>반응속도 체크</h1>
    <!-- <div id="screen" v-bind:class="state">{{ msg }}</div> -->
    <div id="screen" :class="state" @click="onClickScreen">{{ msg }}</div>
    <div v-show="time.length">
      <p>평균시간: {{ average }}ms</p>
      <button @click="onClickButton">리셋</button>
    </div>
  </div>
</template>

<script>
const STATE_LIST = {
  WAITING: "waiting",
  READY: "ready",
  NOW: "now",
};

export default {
  name: "App",
  data() {
    return {
      time: [],
      state: STATE_LIST.WAITING,
      msg: "클릭해서 시작하세요.",
      startTime: new Date(),
    };
  },
  computed: {
    average() {
      return this.time.reduce((p, c) => p + c, 0) / this.time.length || 0;
    },
  },
  methods: {
    onClickButton(e) {
      this.time.length = 0;
    },
    onClickScreen() {
      if (this.state == STATE_LIST.WAITING) {
        this.state = STATE_LIST.READY;
        this.msg = "준비 하세요.";
        setTimeout(() => {
          this.state = STATE_LIST.NOW;
          this.msg = "클릭하세요.";
          this.startTime = new Date();
        }, 1000 * Math.random() + 2000);
      } else if (this.state == STATE_LIST.READY) {
        this.state = STATE_LIST.WAITING;
        this.msg = "시작하면 클릭하세요.";
      } else {
        this.time.push(new Date() - this.startTime);
        this.state = STATE_LIST.WAITING;
        this.msg = "클릭해서 시작하세요.";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: #298fca;
}
#screen.ready {
  background-color: #ee0303;
  color: wheat;
}
#screen.now {
  background-color: #10a824;
}
</style>
