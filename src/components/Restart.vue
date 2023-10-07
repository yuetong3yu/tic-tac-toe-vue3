<template>
  <button
    class="text-lg p-2 border-red-500 border rounded-lg ml-4 text-red-200 hover:scale-110 transition-all"
    @click="onButtonClick"
  >
    Restart
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['onclick'])

const onButtonClick = () => emit('onclick')
</script>
