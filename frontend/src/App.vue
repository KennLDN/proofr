<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />
  <div class="flex p-4 w-screen h-screen sm:pl-52 mt-12 sm:mt-0 justify-center">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
