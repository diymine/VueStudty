<!-- src/components/Hello.vue -->
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import HelloVue from "./HelloVue";
export default HelloVue;
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>