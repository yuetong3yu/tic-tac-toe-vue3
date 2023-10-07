<template>
  <div
    class="relative flex flex-col w-96 h-96 bg-slate-600 border-2 border-black"
  >
    <div class="flex">
      <HorizontalLine :is-first-checker-line="true" />
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
    </div>
    <div class="flex">
      <HorizontalLine :is-first-checker-line="false" />
      <VerticalLine :is-first-checker-line="true" />
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
    </div>
    <div class="flex">
      <VerticalLine :is-first-checker-line="false" />
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
      <div class="w-32 h-32"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HorizontalLine from './HorizontalLine.vue'
import VerticalLine from './VerticalLine.vue'
</script>
