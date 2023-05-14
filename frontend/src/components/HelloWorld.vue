<script setup>
import { ref } from 'vue'

const send = () => {
  const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: '{"id":2,"score":20}'
};

fetch('http://localhost:3000/play', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

</script>

<template>
  <button @click="send()"> add </button>
</template>

<style scoped>
.scores {
  display: flex;
  flex-direction: row;
}
</style>
