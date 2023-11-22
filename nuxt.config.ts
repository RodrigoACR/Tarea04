// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig
({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/snipcart'],
  snipcart: {publicApiKey: 'Njc0MjUwYWEtODU5YS00MDM4LWJkMjEtNmIyMzU1MWE1NmQwNjM4MzU3NjExMDAzMTQwMjYy'},
  components : true,
  content: {
		documentDriven: true,
		markdown: { toc: { depth: 3, searchDepth: 3, }, },
		highlight: { theme: "dracula-soft", },
	},
})
