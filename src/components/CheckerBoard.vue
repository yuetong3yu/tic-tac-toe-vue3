<template>
  <div
    class="relative flex flex-col w-96 h-96 bg-slate-600 border-2 border-black"
  >
    <div
      v-for="(layerCells, layer) in checkerBoardState"
      class="flex"
      :id="String(layer)"
    >
      <HorizontalLine :v-if="layer < 2" :is-first-checker-line="layer === 0" />
      <VerticalLine :v-if="layer > 0" :is-first-checker-line="layer === 1" />
      <div
        v-for="(cell, cellIndex) in layerCells"
        class="w-32 h-32 flex items-center justify-center"
        @click="onCellClick([layer, cellIndex])"
      >
        <Circle v-if="cell === 0" />
        <Cross v-if="cell === 1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits, watch } from 'vue'
import HorizontalLine from './HorizontalLine.vue'
import VerticalLine from './VerticalLine.vue'
import Cross from './Cross.vue'
import Circle from './Circle.vue'

const emit = defineEmits(['winner'])
const checkerBoardState = ref<(null | number)[][]>([
  new Array(3).fill(null),
  new Array(3).fill(null),
  new Array(3).fill(null),
])
const constructedString = computed(() => {
  let res = ''
  for (const cells of checkerBoardState.value) {
    for (const cell of cells) {
      res += cell === null ? '?' : String(cell)
    }
  }
  return res
})
const currentPlayerState = ref(0)
const whoWin = computed(() => {
  if (
    constructedString.value[0] !== '?' &&
    constructedString.value[0] === constructedString.value[1] &&
    constructedString.value[0] === constructedString.value[2]
  ) {
    return constructedString.value[0]
  }
  if (
    constructedString.value[0] !== '?' &&
    constructedString.value[0] === constructedString.value[3] &&
    constructedString.value[0] === constructedString.value[6]
  ) {
    return constructedString.value[0]
  }
  if (
    constructedString.value[0] !== '?' &&
    constructedString.value[0] === constructedString.value[4] &&
    constructedString.value[0] === constructedString.value[8]
  ) {
    return constructedString.value[0]
  }
  if (
    constructedString.value[1] !== '?' &&
    constructedString.value[1] === constructedString.value[4] &&
    constructedString.value[1] === constructedString.value[7]
  ) {
    return constructedString.value[1]
  }
  if (
    constructedString.value[2] !== '?' &&
    constructedString.value[2] === constructedString.value[5] &&
    constructedString.value[2] === constructedString.value[8]
  ) {
    return constructedString.value[2]
  }
  if (
    constructedString.value[2] !== '?' &&
    constructedString.value[2] === constructedString.value[4] &&
    constructedString.value[2] === constructedString.value[7]
  ) {
    return constructedString.value[2]
  }
  if (
    constructedString.value[3] !== '?' &&
    constructedString.value[3] === constructedString.value[4] &&
    constructedString.value[3] === constructedString.value[5]
  ) {
    return constructedString.value[3]
  }
  if (
    constructedString.value[6] !== '?' &&
    constructedString.value[6] === constructedString.value[7] &&
    constructedString.value[6] === constructedString.value[8]
  ) {
    return constructedString.value[6]
  }
  return null
})

const onCellClick = (position: [number, number]) => {
  if (checkerBoardState.value[position[0]][position[1]] !== null) return
  checkerBoardState.value[position[0]][position[1]] = currentPlayerState.value
  currentPlayerState.value = currentPlayerState.value === 0 ? 1 : 0
}

watch(whoWin, () => {
  emit('winner', whoWin.value)
})
</script>
