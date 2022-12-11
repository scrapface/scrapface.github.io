// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  imports: { dirs: ["stores"] },
  modules: [
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org
    "@nuxtjs/i18n", // https://v8.i18n.nuxtjs.org
    "@nuxtjs/tailwindcss", // https://tailwindcss.com
    "@pinia/nuxt", // https://pinia.vuejs.org
    "@vueuse/nuxt", // https://vueuse.org/guide
    "nuxt-font-loader", // https://github.com/ivodolenc/nuxt-font-loader
    "nuxt-icon", // https://github.com/nuxt-modules/icon
  ],

  colorMode: { classSuffix: "", storageKey: "theme" },

  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        family: "Inter",
      },
    ],
  },

  i18n: {
    baseUrl: process.env.SITE_URL || "", // For SEO.
    detectBrowserLanguage: { cookieKey: "locale" },
    langDir: "assets/locales",
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || "",
    },
  },
});
