// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/ui", "@nuxtjs/i18n"],

	vite: {
		plugins: [tailwindcss()],
	},

	i18n: {
		defaultLocale: "uz",
		detectBrowserLanguage: false,
		locales: [
			{ code: "en", name: "English", file: "en.json" },
			{ code: "uz", name: "Uzbek", file: "uz.json" },
			{ code: "ru", name: "Russian", file: "ru.json" },
		],
	},

	css: ["./app/assets/css/main.css"],
})
