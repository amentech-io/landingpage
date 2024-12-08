export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/eslint', '@vueuse/nuxt'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      // standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'http://localhost:3000',
    lazy: true,
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', dir: 'ltr' },
      { code: 'en', language: 'en-US', name: 'English', dir: 'ltr' },
      // { code: 'ar', language: 'ar-DZ', file: 'ar.yml', name: 'العربية', dir: 'rtl' },
    ],
    defaultLocale: 'fr',
  },
})
