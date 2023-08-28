<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />
  <div class="flex p-4 w-screen h-screen sm:pl-52 pt-16 mb-0 sm:pt-4 justify-center">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
