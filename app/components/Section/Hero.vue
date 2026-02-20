<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<header
		class="relative h-screen min-h-150 flex items-center justify-center overflow-hidden"
	>
		<!-- Background Image -->
		<div class="absolute inset-0">
			<img
				src="~/assets/images/jpg/hero-2.jpg"
				alt="Farg'ona kurort zonasi"
				class="w-full h-full object-cover object-top"
			/>
			<!-- gradient overlay -->
			<div
				class="absolute inset-0 bg-linear-to-t from-[rgba(2,44,34,0.85)] to-[rgba(2,44,34,0.6)"
			/>
			<!-- Subtle vignette -->
			<div
				class="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent to-black/30"
			/>
		</div>

		<!-- Content -->
		<div class="relative z-10 w-full px-4 sm:px-6">
			<div
				class="container mx-auto max-w-5xl flex flex-col items-center text-center"
			>
				<!-- Badge -->
				<div
					class="badge-pulse inline-block bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 px-5 py-1.5 rounded-full text-tiny font-bold mb-8 uppercase tracking-[0.3em]"
				>
					{{ $t("hero.badge") }}
				</div>

				<!-- Heading -->
				<h1
					class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tighter leading-[1.2]"
				>
					{{ $t("hero.title") }}
					<br />
					<span
						class="mt-4 text-emerald-400 font-light italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
					>
						{{ $t("hero.subtitle") }}
					</span>
				</h1>

				<!-- Subtitle -->
				<p
					class="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-12 leading-relaxed"
				>
					{{ $t("hero.description") }}
				</p>

				<!-- CTA Buttons -->
				<div
					class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
				>
					<a
						href="./pq-5"
						target="_blank"
						download
						class="group w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2"
					>
						<svg
							class="w-4 h-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
						{{ $t("hero.download") }}
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom scroll indicator -->
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10"
		>
			<span class="text-xs tracking-[0.2em] uppercase">{{
				$t("hero.scroll")
			}}</span>
			<div
				class="w-px h-10 bg-linear-to-b from-white/40 to-transparent animate-pulse"
			/>
		</div>
	</header>
</template>

<style>
.badge-pulse {
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
	}

	70% {
		box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
	}
}
</style>
