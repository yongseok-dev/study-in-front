<template>
  <p>줄임말과 원래말을 입력하세요.</p>
  <div>
    <!-- 선언 변수와 테그 속성을 결합. -->
    <input type="text" v-bind:value="abbr" />
    <!-- value 속성 값을 해당 변수명에 저장함 -->
    <input type="text" v-model="normal" />
    <!-- model은 양방향 결합 -->
    <hr />
    <abbr v-bind:title="normal">{{ abbr }}</abbr>
  </div>
  <div>
    <input type="text" :value="abbr2" />
    <hr />
    <abbr2 :title="normal">{{ abbr2 }}</abbr2>
  </div>
  <div>
    <input type="text" v-model="abbr3" />
    <hr />
    <abbr3 :title="normal">{{ abbr3 }}</abbr3>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const abbr = ref('DOPT')
    const abbr2 = ref('DOPT')
    const abbr3 = ref('DOPT')
    const normal = ref('Dong Project Team')

    return {
      abbr,
      abbr2,
      abbr3,
      normal,
    }
  },
}
</script>
