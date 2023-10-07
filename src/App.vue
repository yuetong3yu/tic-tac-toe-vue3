<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-400 w-screen h-screen"
  >
    <section
      class="flex items-center font-bold text-4xl mb-4 italic text-green-400"
    >
      {{ winnerStr.length ? `${winnerStr} won!` : 'Tic Tac Toe' }}
      <Restart v-if="!!winnerStr" @onclick="onRestart" />
    </section>
    <CheckerBoard @winner="winnerCB" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckerBoard from './components/CheckerBoard.vue'
import Restart from './components/Restart.vue'

const winnerStr = ref<string>('')
const winnerCB = (winner: string) => {
  if (winner.length) winnerStr.value = winner === '0' ? 'Circle' : 'Cross'
}
const onRestart = () => {
  console.log('1234 restart')
}
</script>
