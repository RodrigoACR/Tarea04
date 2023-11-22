// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig
({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  components : true,
  content: {
		documentDriven: true,
		markdown: { toc: { depth: 3, searchDepth: 3, }, },
		highlight: { theme: "dracula-soft", },
	},
})
