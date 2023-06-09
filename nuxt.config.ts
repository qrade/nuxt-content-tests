// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
 
  modules: ['@nuxt/content', '@nuxtjs/i18n'],
  content: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'it', iso: 'it-IT', name: 'Italiano' },
    ],
    defaultLocale: 'en',

  },
  devtools: {
    enabled: true,
  }
})
