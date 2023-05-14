<script setup>
import { ref, reactive, onMounted } from 'vue'
const game = reactive({})


onMounted(()=>{
  window.setInterval(() => {
    const options = {
      method: 'GET'
    };
    
    fetch('http://localhost:3000/', options)
    .then(response => response.json())
    .then(response => {console.log(response); game.value = response; console.log(2, game.value)})
    .catch(err => console.error(err));
    
  }, 500)
})
</script>

<template>
  <!-- {{ JSON.stringify(game) }} -->
  <div v-if="game.value" class="scores">
    <div v-for="player, index in game.value.players" :key="index" class="card w-100 summary border-success h-100">

      <div class="card-header">
        {{ player.name }}
      </div>
      <div class="card-body">
        <h1 class="card-title">{{ player.score }} </h1>
      </div>
    </div>

  </div>
</template>

<style scoped>
.scores {
  display: flex;
  flex-direction: row;
}
</style>
