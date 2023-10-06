<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-400 w-screen h-screen"
  >
    <section class="font-bold text-3xl mb-4 italic text-green-400">
      Tic Tac Toe
    </section>
    <CheckerBoard />
  </div>
</template>

<script setup lang="ts">
import CheckerBoard from './components/CheckerBoard.vue'
</script>
