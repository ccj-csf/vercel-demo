<script setup lang="ts">
import { ref } from 'vue';
// import Child from './components/Child.vue';
import Parent from './components/Parent.vue';
// import Test from './components/Test.tsx';
const countRef = ref(0)
const list = [{ name: 'ccj', age: 18 }]
function add() {
  countRef.value++
}
function childAdd(n: string) {
  countRef.value += +n
}
</script>

<template>
  <div class="wrap">
    <main class="bg">
      <Parent></Parent>
    </main>
  </div>
</template>

<style scoped>
.bg {
  background-color: blue;
  opacity: .8;
  color: white;
  font-size: 26px;
}
</style>
