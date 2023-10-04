<template>
  <div>Hello Vue3, {{ VITE_SUPER_KEY }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const VITE_SUPER_KEY = ref(import.meta.env.VITE_SUPER_KEY)
</script>
