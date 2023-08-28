<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from '@/components/navbar.vue'
</script>

<template>
  <navbar />
    <div class="relative flex p-4 w-screen h-auto sm:pl-52 pt-16 mb-0 sm:pt-4 justify-center">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
