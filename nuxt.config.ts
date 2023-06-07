// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  content: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    defaultLocale: 'it',
    langDir: 'locales/',
  },
  devtools: {
    enabled: true,
  },
});
