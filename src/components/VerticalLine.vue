<template>
  <div :class="`absolute w-[1px] h-full bg-black top-0 ${leftClass}`"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  isFirstCheckerLine: boolean
}>()

const leftClass = props.isFirstCheckerLine ? 'left-32' : 'left-64'
</script>
