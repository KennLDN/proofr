import { watch } from 'vue';
import { useThemeStore } from '@/stores/theme.js';

export function useThemeController() {
  const themeStore = useThemeStore();

  const themeColors = {
    dracula: '#181920',
    business: '#0f0f0f',
    garden: '#d8d5d5'
  };

  const themeButtons = [
    { theme: 'dracula', icon: 'cloud-moon' },
    { theme: 'business', icon: 'moon' },
    { theme: 'garden', icon: 'sun' }
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