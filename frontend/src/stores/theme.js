import { defineStore } from 'pinia';
import { useCookies } from 'vue3-cookies';

export const useThemeStore = defineStore({
  id: 'theme',

  state: () => {
    const { cookies } = useCookies();
    return {
      activeTheme: cookies.get('activeTheme') || 'dracula',
    };
  },

  getters: {
    getActiveTheme(state) {
      return state.activeTheme;
    },
  },

  actions: {
    setActiveTheme(theme) {
      const { cookies } = useCookies();
      
      this.activeTheme = theme;
      
      cookies.set('activeTheme', theme, {
        path: '/',
        expires: "365d",
      });
    },
  },
});
