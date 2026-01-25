<!-- components/Navbar.vue -->
<template>
	<nav class="px-4 py-4 fixed top-0 w-full z-50">
		<div class="max-w-7xl mx-auto flex items-center justify-between border border-white rounded-full py-4 px-6 bg-white/10">
			<!-- Logo -->
			<NuxtLink to="/" class="flex items-center gap-2">
				<img src="~/assets/images/logo/logo.svg" alt="Playstat" />
			</NuxtLink>
			<!-- Desktop Menu -->
			<div class="hidden md:flex items-center gap-8">
				<NuxtLink
					to="/players"
					class="text-white hover:text-sc transition-colors"
				>
					For players
				</NuxtLink>
				<NuxtLink
					to="/clubs"
					class="text-white hover:text-sc transition-colors"
				>
					For clubs
				</NuxtLink>
				<NuxtLink to="/faqs" class="text-white hover:text-sc transition-colors">
					FAQ / Testimonial
				</NuxtLink>

				<!-- Language Selector -->
				<div class="relative">
					<button
						@click="toggleLanguage"
						class="flex items-center gap-1 text-white hover:text-sc transition-colors group"
					>
						<span class="w-4">{{ currentLanguage }}</span>
						<UIcon
							name="ic:round-keyboard-arrow-down"
							class="text-white text-2xl group-hover:text-sc"
						/>
					</button>

					<div
						v-show="languageOpen"
						class="absolute right-0 mt-2 w-auto bg-white rounded-xl shadow-lg z-10 overflow-hidden"
					>
						<button
							v-for="lang in languages"
							:key="lang"
							v-show="lang != currentLanguage"
							@click="selectLanguage(lang)"
							class="block w-full text-left px-4 py-2 text-text hover:bg-sc rounded-xl"
						>
							{{ lang }}
						</button>
					</div>
				</div>

				<!-- Booking Button -->
				<button
					class="bg-sc text-main font-semibold px-6 py-2 rounded-full hover:bg-white transition-colors duration-300"
				>
					Booking
				</button>
			</div>

			<!-- Mobile Menu Button -->
			<button @click="toggleMobileMenu" class="md:hidden text-white">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		<div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
			<div class="flex flex-col gap-4">
				<a href="#" class="text-white hover:text-lime-400 transition-colors"
					>For Players</a
				>
				<a href="#" class="text-white hover:text-lime-400 transition-colors"
					>For Clubs</a
				>
				<a href="#" class="text-white hover:text-lime-400 transition-colors"
					>FAQ / Testimonial</a
				>
				<button
					class="bg-lime-400 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-lime-300 transition-colors w-full"
				>
					Booking
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from "vue"

const currentLanguage = ref("EN")
const languageOpen = ref(false)
const mobileMenuOpen = ref(false)
const languages = ["EN", "UZ", "RU"]

const toggleLanguage = () => {
	languageOpen.value = !languageOpen.value
}

const selectLanguage = (lang: string) => {
	currentLanguage.value = lang
	languageOpen.value = false
}

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
