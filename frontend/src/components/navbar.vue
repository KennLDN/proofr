<script setup>
import { useThemeController } from '@/composables/themeController';
import { useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const { updateTheme, themeStore, themeButtons } = useThemeController();

const route = useRoute();

const isActiveRoute = (path) => route.path === path;

const routerLinks = [
  { path: '/', icon: 'house-chimney', label: 'home' },
  { path: '/play', icon: 'gamepad', label: 'play' }
];

const windowWidth = ref(window.innerWidth);
const showNav = ref(windowWidth.value >= 640 ? true : false);

const toggleNav = () => {
  if (windowWidth.value < 640) {
    showNav.value = !showNav.value;
  }
};

const closeNav = (event) => {
  const navElement = document.querySelector('nav');

  if (!navElement.contains(event.target) && showNav.value) {
    showNav.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value < 640) {
      showNav.value = false;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>

<template>
  <div class="fixed flex items-center top-0 left-0 w-full h-12 bg-base-200 justify-between visible sm:hidden z-20"
    @click="toggleNav">
    <div class="flex ml-2 gap-2">
      <img class="h-8" src="/favicon.png">
      <h1 class="text-lg font-semibold font-mono">proofr</h1>
    </div>
    <div @click.stop="toggleNav" class="flex h-12 p-4 items-center cursor-pointer select-none">
      <fa :icon="['fas', 'bars']" />
    </div>
  </div>
  <transition name="fade">
    <div v-if="showNav" class="sm:hidden fixed top-0 left-0 w-full h-full bg-black z-10 opacity-30" @click="toggleNav"></div>
  </transition>
  <transition name="slide-fade">
    <nav v-show="showNav || windowWidth >= 640" class="fixed h-full bg-base-200 w-48 sm:mt-0 flex flex-col z-10">
      <div class="flex p-2 gap-2">
        <img class="h-8" src="/favicon.png">
        <h1 class="text-lg font-semibold font-mono">proofr</h1>
      </div>
      <div class="flex-grow">
        <RouterLink v-for="link in routerLinks" :key="link.path" :to="link.path" @click="toggleNav">
          <div :class="{ 'bg-neutral text-neutral-content': isActiveRoute(link.path) }"
            class="flex py-3 px-4 gap-2 select-none items-center transition hover:bg-neutral-focus hover:text-neutral-content">
            <fa size="xs" :icon="['fas', link.icon]" />
            {{ link.label }}
          </div>
        </RouterLink>
      </div>
      <div class="flex h-12">
        <div v-for="btn in themeButtons" :key="btn.theme"
          class="flex w-1/3 cursor-pointer select-none transition justify-center items-center hover:text-neutral-content hover:bg-neutral-focus"
          :class="{
            'bg-neutral text-neutral-content': themeStore.getActiveTheme === btn.theme,
          }" @click="updateTheme(btn.theme)">
          <fa size="xs" :icon="['fas', btn.icon]" />
        </div>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
@media (min-width: 640px) {
  nav {
    display: flex !important;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>