<template>
  <p>{{ counter + counter2 }}</p>
  <p v-if="counter < 5">5보다 작습니다.</p>
  <p v-else>5와 같거나 큽니다.</p>
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
  <button @click="onClick">클릭하면 숫자가 내려려갑니다.</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const counter2 = ref(0)

const onClick = (evt) => {
  if (evt) {
    evt.preventDefault()
    counter.value--
  }
}
</script>
