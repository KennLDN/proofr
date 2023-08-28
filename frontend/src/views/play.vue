<script setup>
import playSettings from '@/components/playSettings.vue'
import gameBoard from '@/components/gameBoard.vue'
</script>

<template>
  <div class="h-full w-full">
    <div class="hidden relative space-y-4 w-[640px]">
      <!-- <playSettings /> -->
    </div>
    <div class="flex xl:justify-center items-center xl:items-start flex-col xl:flex-row gap-4 relative w-full h-full">
      <gameBoard class="flex-shrink-0 h-full xl:overflow-scroll" />

      <div class="hidden sticky top-4 xl:block flex-grow max-w-[400px] p-4 h-min bg-base-200">
        <h2>Current Stats</h2>
        <div class="divider mt-1 mb-2"></div>
      </div>
    </div>
    <div class="upshadow flex justify-evenly items-center gap-2 fixed block sm:pl-[198px] p-2 xl:hidden left-0 bottom-0 h-12 w-screen bg-base-200">
      <div class="flex items-center h-full gap-2">
        <p class="text-sm font-light opacity-40">PAGE</p>
        <p class="text-md font-medium text-accent">1/2</p>
      </div>
      <div class="flex items-center h-full gap-2">
        <p class="text-sm font-light opacity-40">TIME</p>
        <p class="text-md font-medium text-secondary">4:32</p>
      </div>
      <div class="flex items-center h-full gap-0.5">
        <p class="text-sm font-light opacity-40 mr-1.5">STATS</p>
        <p class="text-md font-medium text-neutral">18</p>
        <p class="text-md font-regular opacity-40">/</p>
        <p class="text-md font-medium text-success">9</p>
        <p class="text-md font-regular opacity-40">/</p>
        <p class="text-md font-medium text-error">4</p>
      </div>
      <div class="flex items-center gap-2 bg-secondary p-1 px-3 text-secondary-content">
          <p>Finish</p>
      </div>
    </div>
    </div>
</template>

<style scoped>
  .upshadow {
    filter: drop-shadow(0px -18px 0px theme('colors.base-100'));
  }
</style>