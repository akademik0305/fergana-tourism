<script setup lang="ts">
const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
	scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))

const navLinks = [
	{ name: "Qaror Mohiyati", href: "#benefits", number: "01" },
	{ name: "5 ta Hudud", href: "#locations", number: "02" },
	{ name: "Statistika", href: "#stats", number: "03" },
]

const closeMenu = () => {
	isOpen.value = false
}

// Menyu ochiq bo'lganda body scrollni bloklash
watch(isOpen, val => {
	document.body.style.overflow = val ? "hidden" : ""
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
			<div class="flex items-center gap-3 relative z-[60]">
				<div class="leading-none text-left">
					<span
						:class="[
							'text-[10px] font-bold block tracking-[0.2em] uppercase transition-colors duration-300',
							isOpen ? 'text-emerald-400' : 'text-slate-400',
						]"
					>
						Prezident Qarori
					</span>
					<span
						:class="[
							'text-base sm:text-lg font-extrabold tracking-tight uppercase transition-colors duration-300',
							isOpen ? 'text-white' : 'text-emerald-900',
						]"
					>
						Farg'ona Tourism
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
				<a
					href="#apply"
					class="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full font-bold text-sm transition-colors"
				>
					Investitsiya kiritish
				</a>
			</div>

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
			<div class="relative flex flex-col h-full px-8 pt-15 pb-28">
				<!-- Nav Links -->
				<div class="flex-1 flex flex-col justify-center gap-2">
					<TransitionGroup
						enter-active-class="transition-all duration-500"
						enter-from-class="opacity-0 translate-x-8"
						enter-to-class="opacity-100 translate-x-0"
					>
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
					</TransitionGroup>
				</div>

				<!-- CTA Button -->
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
						<span>Investitsiya kiritish</span>
						<span
							class="bg-emerald-950/20 group-hover:bg-emerald-950/30 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
						>
							↗
						</span>
					</a>

					<!-- Footer info -->
					<div
						class="flex items-center justify-between mt-8 text-emerald-700 text-xs tracking-widest uppercase"
					>
						<span>Farg'ona Tourism</span>
						<span>© 2025</span>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>
