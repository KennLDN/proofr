import { watch } from 'vue';
import { useThemeStore } from '@/stores/theme.js';

export function useThemeController() {
  const themeStore = useThemeStore();

  const themeColors = {
    dracula: '#181920',
    black: '#0d0d0d',
    emerald: '#ededed'
  };

  const themeButtons = [
    { theme: 'dracula', icon: 'cloud-moon' },
    { theme: 'black', icon: 'moon' },
    { theme: 'emerald', icon: 'sun' }
  ];

  watch(() => themeStore.getActiveTheme, (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    if (metaThemeColor && themeColors[newTheme]) {
      metaThemeColor.setAttribute('content', themeColors[newTheme]);
    }
  }, { immediate: true });

  const updateTheme = (theme) => {
    themeStore.setActiveTheme(theme);
  }

  return {
    updateTheme,
    themeStore,
    themeButtons
  };
}