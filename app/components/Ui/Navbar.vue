<script setup lang="ts">
//===============================-< imports >-===============================
const { locale, locales, setLocale } = useI18n()
//> variables
const isOpen = ref(false)
const scrolled = ref(false)
const isLangOpen = ref(false)

const handleScroll = () => {
	scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))

const selectLang = (lang: any) => {
	setLocale(lang.code)
	isLangOpen.value = false
}

const navLinks = computed(() => [
	{ name: $t("nav.links.benefits"), href: "#benefits", number: "01" },
	{ name: $t("nav.links.locations"), href: "#locations", number: "02" },
	{ name: $t("nav.links.stats"), href: "#stats", number: "03" },
])

const closeMenu = () => {
	isOpen.value = false
}

watch(isOpen, val => {
	document.body.style.overflow = val ? "hidden" : ""
})

const langDropdownRef = ref<HTMLElement | null>(null)
onMounted(() => {
	document.addEventListener("click", e => {
		if (
			langDropdownRef.value &&
			!langDropdownRef.value.contains(e.target as Node)
		) {
			isLangOpen.value = false
		}
	})
})
</script>

<template>
	<nav
		:class="[
			'fixed w-full z-50 transition-all duration-300',
			scrolled
				? 'bg-white shadow-lg py-3'
				: 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-slate-100',
		]"
	>
		<div class="container mx-auto px-6 flex justify-between items-center">
			<!-- Logo -->
			<div class="flex items-center gap-3 relative z-60">
				<div class="leading-none text-left">
					<span
						:class="[
							'text-tiny font-bold block tracking-[0.2em] uppercase transition-colors duration-300',
							isOpen ? 'text-emerald-400' : 'text-slate-400',
						]"
					>
						{{ $t("nav.badge") }}
					</span>
					<span
						:class="[
							'text-base sm:text-lg font-extrabold tracking-tight uppercase transition-colors duration-300',
							isOpen ? 'text-white' : 'text-emerald-900',
						]"
					>
						{{ $t("nav.logo") }}
					</span>
				</div>
			</div>

			<!-- Desktop Nav -->
			<div class="hidden lg:flex items-center space-x-8">
				<a
					v-for="link in navLinks"
					:key="link.name"
					:href="link.href"
					class="font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
				>
					{{ link.name }}
				</a>

				<!-- Desktop Language Switcher -->
				<div ref="langDropdownRef" class="relative">
					<button
						@click.stop="isLangOpen = !isLangOpen"
						class="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-emerald-400 bg-white hover:bg-emerald-50 transition-all duration-200 text-sm font-semibold text-slate-700"
					>
						<span class="text-bold uppercase">{{ locale }}</span>
						<svg
							:class="[
								'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
								isLangOpen ? 'rotate-180' : '',
							]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<!-- Dropdown -->
					<Transition
						enter-active-class="transition-all duration-200 ease-out"
						enter-from-class="opacity-0 scale-95 -translate-y-2"
						enter-to-class="opacity-100 scale-100 translate-y-0"
						leave-active-class="transition-all duration-150 ease-in"
						leave-from-class="opacity-100 scale-100 translate-y-0"
						leave-to-class="opacity-0 scale-95 -translate-y-2"
					>
						<div
							v-if="isLangOpen"
							class="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-1.5"
						>
							<button
								v-for="lang in locales"
								:key="lang.code"
								@click="selectLang(lang)"
								:class="[
									'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150',
									locale === lang.code
										? 'bg-emerald-50 text-emerald-700'
										: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
								]"
							>
								<span>{{ lang.name }}</span>
								<span
									v-if="locale === lang.code"
									class="ml-auto text-emerald-500"
								>
									<svg
										class="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</span>
							</button>
						</div>
					</Transition>
				</div>
				<a
					href="#apply"
					class="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-bold text-sm transition-colors"
				>
					{{ $t("nav.cta") }}
				</a>
			</div>

			<!-- Right side mobile: Lang + Hamburger -->
			<div class="lg:hidden flex items-center gap-2 relative z-60">
				<!-- Mobile Language Switcher (compact) -->
				<div class="relative" ref="mobileLangRef">
					<button
						@click.stop="isLangOpen = !isLangOpen"
						:class="[
							'flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-semibold transition-all duration-200',
							isOpen
								? 'border-emerald-700 bg-emerald-900 text-white'
								: 'border-slate-200 bg-white text-slate-700',
						]"
					>
						<span class="hidden sm:inline font-bold uppercase">{{
							locale
						}}</span>
						<span class="sm:hidden uppercase text-xs font-bold">{{
							locale
						}}</span>
						<svg
							:class="[
								'w-3 h-3 opacity-50 transition-transform duration-200',
								isLangOpen ? 'rotate-180' : '',
							]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>

					<Transition
						enter-active-class="transition-all duration-200 ease-out"
						enter-from-class="opacity-0 scale-95 -translate-y-2"
						enter-to-class="opacity-100 scale-100 translate-y-0"
						leave-active-class="transition-all duration-150 ease-in"
						leave-from-class="opacity-100 scale-100 translate-y-0"
						leave-to-class="opacity-0 scale-95 -translate-y-2"
					>
						<div
							v-if="isLangOpen"
							class="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-1.5 z-70"
						>
							<button
								v-for="lang in locales"
								:key="lang.code"
								@click="selectLang(lang)"
								:class="[
									'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150',
									locale === lang.code
										? 'bg-emerald-50 text-emerald-700'
										: 'text-slate-600 hover:bg-slate-50',
								]"
							>
								<span>{{ lang.name }}</span>
								<span
									v-if="locale === lang.code"
									class="ml-auto text-emerald-500"
								>
									<svg
										class="w-4 h-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2.5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</span>
							</button>
						</div>
					</Transition>
				</div>

				<!-- Hamburger -->
				<button
					@click="isOpen = !isOpen"
					class="w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
					aria-label="Menyuni ochish"
				>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300 origin-center',
							isOpen
								? 'bg-white rotate-45 translate-y-2'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300',
							isOpen
								? 'bg-white opacity-0 scale-x-0'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300 origin-center',
							isOpen
								? 'bg-white -rotate-45 -translate-y-2'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
				</button>
			</div>
		</div>
	</nav>

	<!-- Fullscreen Mobile Menu -->
	<Transition
		enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
		enter-from-class="opacity-0 scale-95"
		enter-to-class="opacity-100 scale-100"
		leave-active-class="transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"
		leave-from-class="opacity-100 scale-100"
		leave-to-class="opacity-0 scale-95"
	>
		<div
			v-if="isOpen"
			class="lg:hidden fixed inset-0 z-55 bg-emerald-950 flex flex-col"
		>
			<!-- Background decoration -->
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					class="absolute -top-32 -right-32 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl"
				/>
				<div
					class="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl"
				/>
				<div
					class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-900/40 rounded-full blur-3xl"
				/>
			</div>

			<div class="flex justify-end p-4">
				<!-- Hamburger -->
				<button
					@click="isOpen = !isOpen"
					class="lg:hidden relative z-60 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
					aria-label="Menyuni ochish"
				>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300 origin-center',
							isOpen
								? 'bg-white rotate-45 translate-y-2'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300',
							isOpen
								? 'bg-white opacity-0 scale-x-0'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
					<span
						:class="[
							'block h-0.5 w-6 transition-all duration-300 origin-center',
							isOpen
								? 'bg-white -rotate-45 -translate-y-2'
								: 'bg-slate-900 group-hover:bg-emerald-600',
						]"
					/>
				</button>
			</div>

			<!-- Content -->
			<div class="relative flex flex-col h-full px-8 pt-28 pb-12">
				<!-- Nav Links -->
				<div class="flex-1 flex flex-col justify-center gap-2">
					<!-- <TransitionGroup
						enter-active-class="transition-all duration-500"
						enter-from-class="opacity-0 translate-x-8"
						enter-to-class="opacity-100 translate-x-0"
					> -->
					<a
						v-for="(link, i) in navLinks"
						:key="link.name"
						:href="link.href"
						@click="closeMenu"
						:style="{ transitionDelay: isOpen ? `${i * 80 + 100}ms` : '0ms' }"
						class="group flex items-center gap-6 py-5 border-b border-emerald-800/60 hover:border-emerald-500 transition-all duration-300"
					>
						<span
							class="text-emerald-600 font-mono text-xs tracking-widest group-hover:text-emerald-400 transition-colors"
						>
							{{ link.number }}
						</span>
						<span
							class="text-white text-3xl sm:text-4xl font-extrabold tracking-tight group-hover:text-emerald-400 transition-colors duration-300"
						>
							{{ link.name }}
						</span>
						<span
							class="ml-auto text-emerald-700 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all duration-300 text-2xl"
						>
							→
						</span>
					</a>
					<!-- </TransitionGroup> -->
				</div>

				<!-- Mobile menu bottom: CTA + lang pills -->
				<div
					class="transition-all duration-500"
					:style="{
						transitionDelay: isOpen ? '400ms' : '0ms',
						opacity: isOpen ? 1 : 0,
						transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
					}"
				>
					<a
						href="#apply"
						@click="closeMenu"
						class="group flex items-center justify-between w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-5 rounded-2xl font-extrabold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
					>
						<span>{{ $t("nav.cta") }}</span>
						<span
							class="bg-emerald-950/20 group-hover:bg-emerald-950/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
						>
							↗
						</span>
					</a>

					<!-- Lang pills inside mobile menu -->
					<div class="flex flex-wrap gap-2 mt-6">
						<button
							v-for="lang in locales"
							:key="lang.code"
							@click="selectLang(lang)"
							:class="[
								'flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200',
								locale === lang.code
									? 'bg-emerald-500 text-emerald-950'
									: 'bg-emerald-900/60 text-emerald-400 hover:bg-emerald-800',
							]"
						>
							<span>{{ lang.name }}</span>
						</button>
					</div>

					<!-- Footer info -->
					<div
						class="flex items-center justify-between mt-6 text-emerald-700 text-xs tracking-widest uppercase"
					>
						<span>{{ $t("nav.footer") }}</span>
						<span>{{ $t("nav.year") }}</span>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>
