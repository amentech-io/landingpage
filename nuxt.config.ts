// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    lazy: true,
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', dir: 'ltr' },
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr' },
      // { code: 'ar', language: 'ar-DZ', file: 'ar.yml', name: 'العربية', dir: 'rtl' },
    ],
    defaultLocale: 'fr',
  }
})
