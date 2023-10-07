<template>
  <div :class="`absolute w-full h-[1px] bg-black left-0 ${topClass}`"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  isFirstCheckerLine: boolean
}>()

const topClass = props.isFirstCheckerLine ? 'top-32' : 'top-64'
</script>
