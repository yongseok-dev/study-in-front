<template>
  <ol>
    <!-- <li v-for="item in items">{{ item }}</li> -->
    <li v-for="(item, idx) in items">{{ idx }}인덱스의 값: {{ item }}</li>
    <!-- 반복문  -->
  </ol>
  <input type="text" v-model="addItem" />
  <button type="submit" @click="add">입력</button>
</template>

<script setup>
import { ref, reactive } from 'vue'
//배열이나 객체를 반응형으로 사용하기 위해서는 reactive
const items = reactive(['1', '2'])
const addItem = ref()
const add = () => {
  items.push(addItem.value)
}
</script>
