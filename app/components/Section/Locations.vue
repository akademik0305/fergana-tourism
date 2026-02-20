<script setup lang="ts">
import { LOCATIONS } from "~/constants"
</script>

<template>
	<section id="locations" class="py-16 sm:py-24 bg-white">
		<div class="container mx-auto px-6 text-center">
			<h2
				class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter text-slate-900 uppercase"
			>
				{{ $t("locations.section.title") }}
			</h2>
			<div class="w-24 h-2 bg-emerald-600 mx-auto rounded-full" />
			<p
				class="text-slate-500 mt-6 max-w-2xl mx-auto italic text-sm sm:text-base mb-8"
			>
				{{ $t("locations.section.description") }}
			</p>
		</div>

		<div class="container mx-auto px-6">
			<!-- Desktop: 5 column grid -->
			<div class="hidden lg:grid lg:grid-cols-5 gap-4">
				<div
					v-for="loc in LOCATIONS"
					:key="loc.id"
					class="group relative overflow-hidden h-137.5 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500"
				>
					<img
						:src="loc.image"
						:alt="$t(loc.nameKey)"
						class="w-full h-full object-cover group-hover:scale-110 transition duration-1000"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-emerald-950 via-emerald-900/40 to-transparent p-8 flex flex-col justify-end"
					>
						<h3
							class="text-white text-xl font-bold mb-3 tracking-tight group-hover:text-emerald-400 transition-colors"
						>
							{{ $t(loc.nameKey) }}
						</h3>
						<p
							class="text-emerald-50/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500 min-h-30"
						>
							{{ $t(loc.descriptionKey) }}
						</p>
						<div
							class="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						>
							<span
								class="text-tiny font-bold text-emerald-400 uppercase tracking-widest"
							>
								{{ loc.sqm }} {{ $t("locations.section.hectare") }}
							</span>
							<button
								class="text-white font-bold text-xs uppercase tracking-tighter hover:underline"
							>
								{{ $t("locations.section.select") }}
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Tablet: 2 column grid -->
			<div class="hidden md:grid lg:hidden grid-cols-2 gap-4">
				<div
					v-for="loc in LOCATIONS"
					:key="loc.id"
					class="group relative overflow-hidden rounded-3xl shadow-xl h-80"
				>
					<img
						:src="loc.image"
						:alt="$t(loc.nameKey)"
						class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-emerald-900/50 to-transparent p-6 flex flex-col justify-end"
					>
						<h3 class="text-white text-lg font-bold mb-2 tracking-tight">
							<template v-if="loc.id === 'yordon'">
								<span class="underline italic decoration-emerald-500/50">{{
									$t(loc.nameKey)
								}}</span>
							</template>
							<template v-else>
								{{ $t(loc.nameKey) }}
							</template>
						</h3>
						<p
							class="text-emerald-50/70 text-xs leading-relaxed line-clamp-2 mb-3"
						>
							{{ $t(loc.descriptionKey) }}
						</p>
						<div class="flex items-center justify-between">
							<span
								class="text-tiny font-bold text-emerald-400 uppercase tracking-widest"
							>
								{{ loc.sqm }} {{ $t("locations.section.hectare") }}
							</span>
							<button
								class="text-white font-bold text-xs uppercase tracking-tighter hover:underline"
							>
								{{ $t("locations.section.select") }}
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile: horizontal scroll -->
			<div
				class="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
			>
				<div
					v-for="loc in LOCATIONS"
					:key="loc.id"
					class="snap-start shrink-0 w-72 relative overflow-hidden rounded-3xl shadow-xl h-96"
				>
					<img
						:src="loc.image"
						:alt="$t(loc.nameKey)"
						class="w-full h-full object-cover"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-emerald-900/50 to-transparent p-6 flex flex-col justify-end"
					>
						<h3 class="text-white text-xl font-bold mb-2 tracking-tight">
							<template v-if="loc.id === 'yordon'">
								<span class="underline italic decoration-emerald-500/50">{{
									$t(loc.nameKey)
								}}</span>
							</template>
							<template v-else>
								{{ $t(loc.nameKey) }}
							</template>
						</h3>
						<p
							class="text-emerald-50/70 text-sm leading-relaxed line-clamp-3 mb-4"
						>
							{{ $t(loc.descriptionKey) }}
						</p>
						<div class="flex items-center justify-between">
							<span
								class="text-tiny font-bold text-emerald-400 uppercase tracking-widest"
							>
								{{ loc.sqm }} {{ $t("locations.section.hectare") }}
							</span>
							<button
								class="text-white font-bold text-xs uppercase tracking-tighter hover:underline"
							>
								{{ $t("locations.section.select") }}
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile scroll dots indicator -->
			<div class="md:hidden flex justify-center gap-1.5 mt-4">
				<div
					v-for="loc in LOCATIONS"
					:key="loc.id"
					class="w-1.5 h-1.5 rounded-full bg-slate-300"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
.scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.group:hover .group-hover\:translate-y-0 {
	transition-delay: 100ms;
}
</style>
