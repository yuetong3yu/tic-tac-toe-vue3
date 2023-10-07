<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-400 w-screen h-screen"
  >
    <section class="font-bold text-4xl mb-4 italic text-green-400">
      {{ winnerStr.length ? `${winnerStr} won!` : 'Tic Tac Toe' }}
    </section>
    <CheckerBoard @winner="winnerCB" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CheckerBoard from './components/CheckerBoard.vue'

const winnerStr = ref<string>('')
const winnerCB = (winner: string) => {
  if (winner.length) winnerStr.value = winner === '0' ? 'Circle' : 'Cross'
}
</script>
