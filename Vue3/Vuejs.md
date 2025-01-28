# 공식문서

- [스타일가이드](https://ko.vuejs.org/style-guide/rules-essential#avoid-v-if-with-v-for)
- [가이드](https://ko.vuejs.org/guide/quick-start)
- [튜토리얼](https://ko.vuejs.org/tutorial/#step-1)
- [예제코드](https://ko.vuejs.org/examples/#hello-world)
- [뷰라우터](https://router.vuejs.kr/introduction.html)
- [pinia](https://pinia.vuejs.kr/getting-started.html)
- [참고)테마](https://ko.vuejs.org/ecosystem/themes.html)

## 스타일 가이드

### 우선 순위 A 규칙: 필수

- **멀티 워드** 컴포넌트 이름 사용: 컴포넌트 이름은 항상 멀티 워드사용. 모든 HTML 요소가 단어 하나로 구성, 기존 및 미래의 HTML 요소와의 충돌을 방지합니다.(루트 App 컴포넌트를 제외)
- 상세한 **prop 정의** 사용: 커밋된 코드에서는 prop 정의가 가능한 한 상세해야 하며, 최소한 타입을 명시해야 합니다.
  - 컴포넌트의 API를 문서화하여 컴포넌트의 사용 방법을 쉽게 파악
  - 개발 중에 Vue는 잘못된 형식의 props가 컴포넌트에 제공될 경우 경고를 표시하여 오류의 잠재적 원인을 잡을 수 있도록 도와줍니다.
- `v-for`에 `key` 사용하기
  - 컴포넌트 내에서 하위 트리의 내부 컴포넌트 상태를 유지
  - 심지어 요소에 대해서도, 객체의 일관성과 같은 예측 가능한 동작을 유지
- `v-if`와 `v-for`를 함께 사용하지 않기: `v-for`가 있는 같은 요소에 `v-if`를 사용하지 마세요.
- **컴포넌트 범위 스타일** 사용하기(클래스 기반 전략 선호)
  - `scoped` 속성, `CSS 모듈` 라이브러리, `BEM` 클래스 기반 전략

### 우선순위 B 규칙: 강력히 권장

- 컴포넌트 파일
  - 컴포넌트는 자체 파일에 있어야 합니다.
- 싱글 파일 컴포넌트 파일명 대/소문자
  - **파스칼 케이스** or 항상 **케밥 케이스**
- 기본 컴포넌트(프레젠테이션, 순수 컴포넌트라고도 함) 이름
  - 앱별 스타일과 규칙을 적용, 모두 `Base`, `App` 또는 `V`와 같은 특정 접두사로 시작
- 긴밀하게 결합된 컴포넌트 이름
  - 부모 컴포넌트와 긴밀하게 결합된 자식 컴포넌트는 부모 컴포넌트 이름을 접두사로 포함
- 컴포넌트 이름 내 단어 순서
  - 컴포넌트 이름은 가장 높은 수준의 단어(명사)로 시작하고 **설명적인 수정 단어**로 끝나야 합니다.
- 셀프 클로징 컴포넌트
  - 콘텐츠가 없는 컴포넌트는 SFC, 문자열 템플릿, JSX에서 셀프 클로징
  - in-DOM 템플릿에서는 절대 자체 닫혀서는 안 됩니다.
- 템플릿 내 컴포넌트 이름 대/소문자 구분
  - SFC/문자열 템플릿: **파스칼 케이스**
  - in-DOM 템플릿: **케밥 케이스**
- JS/JSX의 컴포넌트 이름 대/소문자
  - JS/JSX: **파스칼 케이스**
  - `app.component` 전역 컴포넌트 등록만 사용하는 경우 문자열 내부에 **케밥 케이스**
- 전체 단어 컴포넌트 이름
  - 약어 X
- prop 이름 대소문자
  - SFC/JSX: **케밥 케이스** or **캠멜 케이스** (혼용금지)
  - in-DOM 템플릿: **케밥 케이스**
- 다중 속성 앨리먼트
  - 여러 속성을 가진 앨리먼트는 여러 줄에 걸쳐 있어야 하며, 한 줄당 하나의 속성을 사용
- 템플릿의 간단한 표현식
  - 컴포넌트 템플릿에는 단순한 표현식만 포함
  - 복잡한 표현식은 **계산된 속성**이나 **메서드**로 리팩터링
- 단순 계산 프로퍼티
  - 복잡한 계산 프로퍼티는 가능한 한 많은 단순한 프로퍼티로 분할
  - 테스트, 읽기, 변경 용이
- 따옴표로 묶인 속성 값
  - 비어 있지 않은 HTML 속성 값은 항상 따옴표 안에 넣기
- 지시어 단축
  - 지시어 단축(`v-bind:`의 경우 `:`, `v-on:`의 경우 `@`, `v-slot`의 경우 `#`)는 항상 사용하거나 절대 사용하지 않아야 합니다.

### 우선 순위 C 규칙: 권장

- 컴포넌트/인스턴스 옵션 순서
  1. 글로벌 인지도 (컴포넌트를 넘어서는 지식 필요)
  - `name`
  2. 템플릿 컴파일러 옵션 (템플릿 컴파일 방식 변경)
  - `compilerOptions`
  3. 템플릿 의존성 (템플릿에서 사용되는 자산)
  - `components`
  - `directives`
  4. 구성 (옵션에 속성 결합)
  - `extends`
  - `mixins`
  - `provide`/inject
  5. 인터페이스 (컴포넌트의 인터페이스)
  - `inheritAttrs`
  - `props`
  - `emits`
  6. 구성 API (구성 API 사용을 위한 진입점)
  - `setup`
  7. 로컬 상태 (로컬 반응형 속성)
  - `data`
  - `computed`
  8. 이벤트 (반응형 이벤트에 의해 트리거되는 콜백)
  - `watch`
  - 라이프사이클 이벤트 (호출되는 순서대로)
    - `beforeCreate`
    - `created`
    - `beforeMount`
    - `mounted`
    - `beforeUpdate`
    - `updated`
    - `activated`
    - `deactivated`
    - `beforeUnmount`
    - `unmounted`
    - `errorCaptured`
    - `renderTracked`
    - `renderTriggered`
  9. 비반응형 속성 (반응형 시스템과 독립적인 인스턴스 속성)
  - `methods`
  10. 렌더링 (컴포넌트 출력의 선언적 설명)
  - `template`/`render`
- 요소 속성 순서
  1. 정의 (컴포넌트 옵션 제공)
  - `is`
  2. 목록 렌더링 (동일한 요소의 여러 변형 생성)
  - `v-for`
  3. 조건부 (요소가 렌더링/표시되는지 여부)
  - `v-if`
  - `v-else-if`
  - `v-else`
  - `v-show`
  - `v-cloak`
  4. 렌더링 수정자 (요소의 렌더링 방식 변경)
  - `v-pre`
  - `v-once`
  5. 글로벌 인지도 (컴포넌트를 넘어서는 지식 필요)
  - `id`
  6. 고유 속성 (고유한 값이 필요한 속성)
  - `ref`
  - `key`
  7. 양방향 바인딩 (바인딩과 이벤트 결합)
  - `v-model`
  8. 기타 속성 (모든 지정되지 않은 바인딩 및 바인딩되지 않은 속성)
  9. 이벤트 (컴포넌트 이벤트 리스너)
  - `v-on`
  10. 내용 (요소의 내용을 오버라이드함)
  - `v-html`
  - `v-text`
- 컴포넌트/인스턴스 옵션에서의 빈 줄
  - 컴포넌트가 읽기 어렵거나 혼잡해질 때, 여러 줄로 된 속성 사이에 공간을 추가
- 싱글 파일 컴포넌트 최상위 요소 순서
  - <template>, <script>, <style> 태그를 일관되게 정렬

### 우선 순위 D 규칙: 주의해서 사용하기

- scoped에서의 요소 선택자
  - 요소 선택자보다 클래스 선택자를 선호 -> 많은 수의 요소 선택자는 처리 속도가 느리기 때문
- 암시적인 부모-자식 커뮤니케이션
  - 부모-자식 컴포넌트 간의 커뮤니케이션은 this.$parent를 사용하거나 prop을 변형하는 대신, prop과 이벤트를 선호

## 가이드

- Vue.js `프로그레시브 프레임워크`
- `싱글 파일 컴포넌트`(Single-File Component: SFC, \*.vue 파일)라는 파일 형식 Vue 컴포넌트 작성
  - 컴포넌트의 논리(JavaScript), 템플릿(HTML) 및 스타일(CSS)을 하나의 파일에 캡슐화
  - `옵션(Options) API`와 `컴포지션(Composition) API` 두 가지 스타일
- `선언적 렌더링(Declarative Rendering)`: Vue는 표준 HTML을 템플릿 문법으로 확장하여 JavaScript 상태(State)를 기반으로 화면에 출력될 HTML을 선언적(declaratively)으로 작성할 수 있습니다.
- `반응성(Reactivity)`: Vue는 JavaScript 상태(State) 변경을 추적하고, 변경이 발생하면 DOM을 효율적으로 업데이트하는 것을 자동으로 수행합니다.

### template 템플릿 문법

- Vue 템플릿에서 JavaScript 표현식(`return` 뒤에 사용할 수 있는 코드) 사용위치
  - 텍스트 보간법 이중 중괄호(Mustache) 내부 `{{ msg }}`
  - 디렉티브: `v-` 접두사가 있는 특수한 속성 값

### data 반응형 기초

- `ref()`: 반응형 상태를 선언
- Vue는 렌더링 과정에서 사용된 모든 ref를 추적
- ref 변경 -> 추적 컴포넌트 -> 재렌더링 트리거
- getter에서 추적을 수행하고, setter에서 트리거를 수행
- 깊게 중첩된 객체, 배열 또는 Map과 같은 JavaScript 내장 데이터 구조를 포함하여 모든 값 유형을 보유(vue3이상)
- `reactive()`: 내부 값을 특수 객체로 감싸는 ref와 달리 reactive()는 객체 자체를 반응형으로 만듭니다
  - reactive()의 반환 값은 원본 객체와 같지 않고 원본 객체를 재정의한 프록시(Proxy)라는 점
  - 프록시만 반응형입니다. 원본 객체를 변경해도 업데이트가 트리거되지 않습니다.
  - 제한된 값 유형: 객체 유형(객체, 배열 및 컬렉션 유형에만 작동)
  - 전체 객체를 대체할 수 없음(반응 객체에 대한 동일한 참조를 항상 유지) -> `const`로 정의하자
  - 분해 할당에 친화적이지 않음

### computed 계산된 속성

- `computed()` 함수는 `getter` 함수를 전달받기를 기대하며, 반환된 값은 **계산된** `ref`입니다
- 계산된 속성은 의존된 반응형을 기반으로 캐시 -> 의존된 반응형 중 일부가 변경된 경우에만 재평가
- getter에서 사이드 이펙트는 금물
  - 계산된 getter 안에서 다른 상태를 변형시키거나, 비동기 요청을 하거나, DOM을 변경하는 행위는 하지 마세요!

### style 클래스와 스타일 바인딩

- `:class(v-bind:class`로 `객체`, `배열`, `삼항식` 전달
- 인라인 스타일: `:style` 내에서서 camelCase 권장(kebab-cased 가능), 객체 직접 바인딩 가능

### `v-if`, `v-else-if`, `v-else` 조건부 렌더링

- `v-show`: 엘리먼트는 항상 렌더링되고 DOM에 남아 있다는 것(display :none;)
- 일반적으로 v-if는 전환 비용이 더 높고, v-show는 초기 렌더링 비용이 더 높습니다. 따라서 매우 자주 전환해야 하는 경우 v-show를, 실행 중에 조건이 변경되지 않는 경우 v-if를 사용하는 것이 좋습니다.
- `v-if`와 `v-for`를 하나의 태그 내에 동시에 사용하는 것은 권장되지 않습니다.

### `v-for` 조건부 렌더링

- "in-place patch" 전략을 사용: 각 항목에 대해 고유한 `:key` 속성을 제공

```
<!--배열-->
<li v-for="(item, index) in items" :key="item.id">
  {{ item.message }}
</li>
<!--객체체-->
<li v-for="(value, key, index) in myObject" :key="value.id">
  {{ index }}. {{ key }}: {{ value }}
</li>
```

- 컴포넌트에 v-for 사용: 반복된 데이터를 컴포넌트에 전달하려면 props를 사용

- `v-if`가 `v-for`보다 우선순위가 높기 때문에 다음과 같이 분리할 것.
- 배열 변경 감지
  - 수정: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`
  - 교체: filter(), concat(), slice()는 원본 배열을 수정하지 않고 항상 새 배열을 반환하기 때문에 배열 자체를 교체해야함.
  - `computed()` 사용시 원본을 유지한 상태에서 필터링되거나 정렬된 결과를 표시 가능

```
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>
```

- `forEach`의 콜백 함수의 특징과 유사(분해 할당 사용가능)

### `v-on` `@` 이벤트 핸들링

- `v-on:click="handler"`, `@click="handler"`
- 이벤트 수식어
  - `.stop`
  - `.prevent`
  - `.self`
  - `.capture`
  - `.once`
  - `.passive`

```
<!-- 클릭 이벤트 전파가 중지됩니다. -->
<a @click.stop="doThis"></a>

<!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
<form @submit.prevent="onSubmit"></form>

<!-- 수식어를 연결할 수 있습니다. -->
<a @click.stop.prevent="doThat"></a>

<!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
<form @submit.prevent></form>

<!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
<!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
<div @click.self="doThat">...</div>
```

- 입력키 수식어
  - `.enter`
  - `.tab`
  - `.delete` ("Delete" 및 "Backspace" 키 모두 캡처)
  - `.esc`
  - `.space`
  - `.up`
  - `.down`
  - `.left`
  - `.right`
- 시스템 입력키 수식어

  - `.ctrl`
  - `.alt`
  - `.shift`
  - `.meta`: 커멘드 키(⌘), Windows 키(⊞)

- 마우스 버튼 수식어​
  - `.left`
  - `.right`
  - `.middle`

# 한 권으로 배우는 Vue.js 3 / 김동혁 저 | 영진닷컴 | 2021년 09월 10일

- 이북으로 주요 부분 살펴보고, 실습을 선행하고 맞춰보는 형태로 학습함.

# [웹 게임을 만들며 배우는 Vue](https://www.inflearn.com/course/web-game-vue/dashboard) / 제로초(조현영)

- 강의 버전이 2.X인 아쉬움이 있지만, `옵션API` 형태로 빠르게 뷰를 살펴볼 수 있었다.
- 내가 웹팩을 직접 세팅했던적이 있었던가...? 다시 적용할 일은 없을 것 같지만서도... 인식의 폭이 넓어졌다.

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

## ch8. 지뢰찾기

-

## ch9. vue-router

- 다른 라우팅과 대부분 유사함.
- `<router-link to="/">이름</router-link>` 링크 형태태
- `<router-view></router-view>` 들거가는 곳곳
