# 한 권으로 배우는 Vue.js 3

김동혁 저 | 영진닷컴 | 2021년 09월 10일

# [웹 게임을 만들며 배우는 Vue](https://www.inflearn.com/course/web-game-vue/dashboard)

제로초(조현영)

## ch1. 구구단

- 스크립트로 vue 사용하기
- `data`와 `template`
- `v-if`, `v-else-if`, `v-else`
- `v-model` : 양방향 바인딩
- `methodes` : `@click`, `@submit`
  - `e.preventDefault();` 원래의 이벤트 동작을 정지

## ch2. 끝말잇기

- 컴포넌트
- `props`: template 케밥케이스로 쓰고, js 카멜케이스

## ch3. 숫자야구

- webpack 직접 세팅: 이제는 왜 필요한지 알았다!!
- 폴더명에 띄어쓰기 들어가지 않도록...
- js를 잘 활용하는 방법을 계속 살펴보기...

## ch4. 반응속도 측정

- `<style scoped></style>`: 해당 컴포넌트 안에서만 css 적용
- `v-bind:class="~~"` -> `:class="~~"`
- `v-show="~~"`: ~~ false 판정시 display:none
- `v-if="~~"`: ~~ false 판정시 태그자체가 없음.
- `computed`: 일반 데이터의 값에서 파생된 계산이 필요한 부분을 별도로 분리(값이 캐싱되기 때문에, 다른 부분의 변화시 다시 연산하지 않음.)
  - 템플릿 내에서 직접 연산하는 경우를 줄이면 좋을것 같다(가독성 측면에서도)
- `<template></template>`: 실질적으로 태그로 보여지지 않음 상위 태그와 내부 태그가 형제가 됨.(최상단에 연속해서 사용은 불가 하며, 그냥`<div></div>`써도 무방)

## ch5. 가위바위보

- 라이프사이클
- `created()`: 컴포넌트 인스턴스가 생성되고, 데이터 관찰 및 이벤트/워처 설정이 이루어집니다.
- `mounted()`: 컴포넌트가 DOM에 삽입됩니다.
- `updated()`: 반응형 데이터가 변경되어 DOM이 업데이트됩니다.
- `destroyed()`: 컴포넌트가 DOM에서 제거되고, 리소스가 정리됩니다.

## ch6. 로또 생성기

```
// 지연을 생성하는 함수
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
```

- `props` 받기

```
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
```

- `watch`: 데이터의 변화 발생시 실행(계속 바라보고 값의 변경을 추적),안쓰는 것이 좋음

## ch7. 틱택토

- vue2에서 배열의 인덱스로 접근하여 값을 변경한 것, Object key 추가를 데이터 변화로 인식하지 못한다.
  - `Vue.set(target, propertyName/index, value)`, `this.$set(target, propertyName/index, value)`사용
- vue3에서는 해당부분 해결되었고, `this.$set` 메서드가 더 이상 존재하지 않는다.

### EventBus

- vuex: 리액트 상태관리 유사, 데이터를 중앙관리
- eventBus: 이벤트를 중앙에서 통제함

- vue2 `import Vue from "vue";`는 vue3에서 유효하지 않음
  Event Bus는 Vue.js 애플리케이션에서 컴포넌트 간의 통신을 용이하게 해주는 패턴 중 하나입니다. 특히, 부모-자식 관계가 아닌 컴포넌트 간에 데이터를 전달할 때 유용합니다. Vue 2에서는 빈 Vue 인스턴스를 사용하여 Event Bus를 구현하는 것이 일반적이었지만, Vue 3에서는 Composition API와 더 나은 상태 관리 솔루션들이 등장하면서 Event Bus의 사용이 줄어들었지만 여전히 특정 상황에서 유용할 수 있습니다.

  - 외부라이브러리(Mitt) 사용이나, 다음과 같이 이벤트 버스 구현(Composition API를 사용한 커스텀 Event Bus)

  ```
  // src/eventBus.js
  import { reactive } from 'vue';

  const eventBus = reactive({
    listeners: {},
    emit(event, data) {
      if (this.listeners[event]) {
        this.listeners[event].forEach(callback => callback(data));
      }
    },
    on(event, callback) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    },
    off(event, callback) {
      if (this.listeners[event]) {
        this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
      }
    }
  });

  export default eventBus;

  ```

  ```
  <!-- src/components/Receiver.vue -->
  <script>
  import emitter from '../eventBus';
  export default {
    name: "Receiver",
    setup() {
      const receivedMessage = ref('');

      const handleEvent = (payload) => {
        receivedMessage.value = payload.message;
        console.log('Event received:', payload);
      };

      onMounted(() => {
        emitter.on('my-event', handleEvent);
      });

      onUnmounted(() => {
        emitter.off('my-event', handleEvent);
      });

      return {
        receivedMessage
      }
    }
  }
  </script>
  ```

  ```
  <!-- src/components/Sender.vue -->
  <script>
  import emitter from '../eventBus';

  export default {
    name: "Sender",
    methods: {
      sendEvent() {
        const payload = { message: 'Hello from Sender!' };
        emitter.emit('my-event', payload);
        console.log('Event emitted:', payload);
      }
    }
  }
  </script>
  ```

### Vuex 스토어 구조 이해

1. State
   애플리케이션의 중앙 상태를 저장하는 곳입니다. 모든 컴포넌트는 이 상태에 접근할 수 있습니다.
2. Mutations
   상태를 동기적으로 변경하는 유일한 방법입니다. 직접 상태를 변경하지 않고, mutations를 통해 상태를 변경해야 예측 가능한 데이터 흐름을 유지할 수 있습니다.
3. Actions
   비동기 작업이나 복잡한 로직을 처리하는 곳입니다. actions는 mutations를 호출하여 상태를 변경합니다.
4. Getters
   상태를 기반으로 계산된 데이터를 반환하는 곳입니다. 컴포넌트는 getters를 통해 필요한 데이터를 가져올 수 있습니다.

### slot

- 하위 컴포넌트로 태그를 넘겨줄 수 있다.(데이터를 프롭스로 넘기기 너무 힘들때 쓰면 된다.)
- 받을때, `<slot></slot>`으로 받으면 된다.

### 기타

- `v-for` `:key`는 고유한(유니크) 값을 넣어주는 것이 좋다. index는 적절하지 않다.(배열의 중간에서 삭제 되는 경우, 불필요한 랜더링이 발생할 수 있다.)

## ch8.

## ch9.

```

```
