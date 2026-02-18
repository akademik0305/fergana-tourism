<!-- components/Navbar.vue -->
<script setup lang="ts">
//===============================-< imports >-===============================
//> variables
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const languageOpen = ref(false)
const mobileMenuOpen = ref(false)

const toggleLanguage = () => {
	languageOpen.value = !languageOpen.value
}

const selectLanguage = (lang: any) => {
	setLocale(lang)
	languageOpen.value = false
}

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value
	if (mobileMenuOpen.value) {
		document.body.style.overflow = "hidden"
	} else {
		document.body.style.overflow = ""
	}
}

const closeMobileMenu = () => {
	if (mobileMenuOpen.value) {
		mobileMenuOpen.value = false
		document.body.style.overflow = ""
	}
}

//===============================-< handle scroll and resize >-===============================
const startFixed = 80
const isFixedNav = ref(false)

function handleScroll() {
	const navbar = document.querySelector("#navbar")
	const currentNavbarHeight = navbar?.scrollHeight || startFixed

	if (window.scrollY > currentNavbarHeight) {
		isFixedNav.value = true
	} else {
		isFixedNav.value = false
	}
}

function handleResize() {
	if (window.innerWidth >= 768 && mobileMenuOpen.value) {
		closeMobileMenu()
	}
}

//===============================-< on page load >-===============================
onMounted(() => {
	window.addEventListener("scroll", handleScroll)
	window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll)
	window.removeEventListener("resize", handleResize)
	document.body.style.overflow = ""
})
</script>

<template>
	<nav
		id="navbar"
		class="px-3 md:px-4 py-3 md:py-4 top-0 w-full z-50 fixed transition-all duration-300"
	>
		<div class="container">
			<div
				class="mx-auto flex items-center justify-between border border-white rounded-full py-3 md:py-4 px-4 md:px-6 backdrop-blur-sm transition-all duration-300"
				:class="[isFixedNav ? 'bg-main/90 shadow-lg' : 'bg-white/10']"
			>
				<!-- Logo -->
				<NuxtLink :to="localePath('/')" class="flex items-center gap-2 z-50">
					<img
						src="~/assets/images/logo/logo.svg"
						alt="Playstat"
						class="h-6 md:h-8 w-auto"
					/>
				</NuxtLink>

				<!-- Desktop Menu -->
				<div class="hidden lg:flex items-center gap-6 xl:gap-8">
					<NuxtLink
						:to="localePath('/clubs')"
						class="text-white hover:text-sc transition-colors text-sm xl:text-base font-medium"
					>
						{{ $t("nav.for_players") }}
					</NuxtLink>
					<NuxtLink
						:to="localePath('/manager')"
						class="text-white hover:text-sc transition-colors text-sm xl:text-base font-medium"
					>
						{{ $t("nav.for_clubs") }}
					</NuxtLink>
					<NuxtLink
						:to="localePath('/manager')"
						class="text-white hover:text-sc transition-colors text-sm xl:text-base font-medium"
					>
						{{ $t("nav.faq") }}
					</NuxtLink>

					<!-- Language Selector -->
					<div class="relative">
						<button
							@click="toggleLanguage"
							class="flex items-center gap-1 text-white hover:text-sc transition-colors group"
						>
							<span class="w-5 text-sm xl:text-base font-medium uppercase">{{
								locale
							}}</span>
							<UIcon
								name="ic:round-keyboard-arrow-down"
								class="text-white text-xl xl:text-2xl group-hover:text-sc transition-transform duration-200"
								:class="{ 'rotate-180': languageOpen }"
							/>
						</button>

						<!-- Language Dropdown -->
						<Transition
							enter-active-class="transition ease-out duration-200"
							enter-from-class="opacity-0 translate-y-1"
							enter-to-class="opacity-100 translate-y-0"
							leave-active-class="transition ease-in duration-150"
							leave-from-class="opacity-100 translate-y-0"
							leave-to-class="opacity-0 translate-y-1"
						>
							<div
								v-show="languageOpen"
								class="absolute right-0 mt-2 w-20 bg-white rounded-xl shadow-lg overflow-hidden"
							>
								<button
									v-for="(lang, index) in locales"
									:key="index"
									v-show="lang.code !== locale"
									@click="selectLanguage(lang.code)"
									class="block w-full text-left px-4 py-2 text-sm text-text hover:bg-sc hover:text-main transition-colors font-medium uppercase"
								>
									{{ lang.code }}
								</button>
							</div>
						</Transition>
					</div>

					<!-- Booking Button -->
					<button
						class="bg-sc text-main font-semibold px-5 xl:px-6 py-2 rounded-full hover:bg-white transition-all duration-300 text-sm xl:text-base hover:shadow-lg active:scale-95"
					>
						{{ $t("nav.booking") }}
					</button>
				</div>

				<!-- Mobile & Tablet Menu Button -->
				<button
					@click="toggleMobileMenu"
					class="lg:hidden text-white z-50 p-1 hover:bg-white/10 rounded-lg transition-colors"
					aria-label="Toggle menu"
				>
					<svg
						class="w-6 h-6 transition-transform duration-300"
						:class="{ 'rotate-90': mobileMenuOpen }"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							v-if="!mobileMenuOpen"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
						<path
							v-else
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu Backdrop -->
		<Transition
			enter-active-class="transition-opacity ease-linear duration-300"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity ease-linear duration-300"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="mobileMenuOpen"
				@click="closeMobileMenu"
				class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
				style="margin-top: 0"
			/>
		</Transition>

		<!-- Mobile Menu Panel -->
		<Transition
			enter-active-class="transition ease-out duration-300"
			enter-from-class="opacity-0 translate-x-full"
			enter-to-class="opacity-100 translate-x-0"
			leave-active-class="transition ease-in duration-200"
			leave-from-class="opacity-100 translate-x-0"
			leave-to-class="opacity-0 translate-x-full"
		>
			<div
				v-if="mobileMenuOpen"
				class="lg:hidden fixed top-0 right-0 h-screen w-full max-w-sm bg-main shadow-2xl overflow-y-auto"
			>
				<div class="flex flex-col h-full">
					<!-- Mobile Menu Header -->
					<div
						class="flex items-center justify-between p-6 border-b border-white/10"
					>
						<img
							src="~/assets/images/logo/logo.svg"
							alt="Playstat"
							class="h-7 w-auto"
						/>
						<button
							@click="closeMobileMenu"
							class="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
						>
							<UIcon name="ic:round-close" class="text-2xl" />
						</button>
					</div>

					<!-- Mobile Menu Content -->
					<div class="flex-1 flex flex-col justify-between p-6">
						<div class="space-y-1">
							<NuxtLink
								:to="localePath('/clubs')"
								@click="closeMobileMenu"
								class="block text-white hover:text-sc hover:bg-white/5 transition-all px-4 py-3 rounded-xl font-medium text-lg"
							>
								{{ $t("nav.for_players") }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/manager')"
								@click="closeMobileMenu"
								class="block text-white hover:text-sc hover:bg-white/5 transition-all px-4 py-3 rounded-xl font-medium text-lg"
							>
								{{ $t("nav.for_clubs") }}
							</NuxtLink>
							<NuxtLink
								:to="localePath('/manager')"
								@click="closeMobileMenu"
								class="block text-white hover:text-sc hover:bg-white/5 transition-all px-4 py-3 rounded-xl font-medium text-lg"
							>
								{{ $t("nav.faq") }}
							</NuxtLink>

							<!-- Mobile Language Selector -->
							<div class="pt-4 border-t border-white/10 mt-4">
								<p
									class="text-white/60 text-xs uppercase tracking-wide px-4 mb-2"
								>
									{{ $t("nav.language") }}
								</p>
								<div class="grid grid-cols-3 gap-2">
									<button
										v-for="lang in locales"
										:key="lang.code"
										@click="selectLanguage(lang.code)"
										class="px-4 py-2 rounded-lg text-sm font-medium transition-all uppercase"
										:class="
											locale === lang.code
												? 'bg-sc text-main'
												: 'bg-white/5 text-white hover:bg-white/10 '
										"
									>
										{{ lang.code }}
									</button>
								</div>
							</div>
						</div>

						<!-- Mobile Booking Button -->
						<div class="space-y-3 pt-6 border-t border-white/10">
							<button
								@click="closeMobileMenu"
								class="w-full bg-sc text-main font-semibold px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 text-base shadow-lg hover:shadow-xl active:scale-95"
							>
								{{ $t("nav.booking") }}
							</button>

							<p class="text-white/40 text-xs text-center">
								{{ $t("nav.copyright") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	</nav>
</template>

<style scoped>
.overflow-y-auto::-webkit-scrollbar {
	width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
	background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.3);
}
</style>
