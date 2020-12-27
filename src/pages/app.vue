<template>
  <div id="#app">
    <p v-if="counter === 3">{{ title }}</p>
    <p>{{ counter }}</p>
    <button @click="increaseCounter">+1</button>
    <button @click="decreaseCounter">-1</button>
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data: {
    title: "Hello Vue!",
    counter: 0,
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
});
</script>

<style>
</style>
