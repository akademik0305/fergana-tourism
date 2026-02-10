<!-- components/ClubCard.vue -->
<template>
	<div
		class="bg-card-bg rounded-xl md:rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
	>
		<!-- Club Image -->
		<div class="relative h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
			<img
				:src="club.image"
				:alt="club.name"
				class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
			/>
		</div>

		<!-- Club Info -->
		<div class="px-3 md:px-3.5 pt-5 md:pt-7 pb-6 md:pb-9">
			<!-- Title and Price -->
			<div
				class="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-3"
			>
				<div class="flex-1 w-full sm:w-auto">
					<h3
						class="font-medium text-black text-sm md:text-[15px] line-clamp-2"
					>
						{{ club.name }}
					</h3>
				</div>
				<div class="flex items-center gap-1 shrink-0">
					<UIcon
						name="mingcute:wallet-line"
						class="text-base md:text-lg text-main"
					/>
					<span
						class="font-medium text-xs md:text-[13px] text-gray whitespace-nowrap"
					>
						{{ formatPrice(club.price) }} sum
					</span>
				</div>
			</div>

			<!-- Location and Rating -->
			<div class="pb-4 md:pb-6 mt-2 md:mt-2 space-y-2">
				<!-- Location -->
				<p class="font-medium text-xs md:text-[13px] text-gray">
					{{ club.distance }} km – {{ club.city }}
				</p>

				<!-- Rating -->
				<div class="flex items-center flex-wrap gap-1">
					<div class="flex items-center">
						<UIcon
							name="basil:star-solid"
							v-for="star in 5"
							:key="star"
							class="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"
							:class="
								star <= Math.floor(club.rating)
									? 'text-yellow-400'
									: 'text-gray-300'
							"
						/>
					</div>
					<span class="ml-0.5 font-medium text-xs md:text-[13px] text-gray">
						{{ club.rating }} ({{ club.reviews }} sharh)
					</span>
				</div>
			</div>

			<!-- Time Availability -->
			<div class="border-t border-border pt-4 md:pt-6">
				<p class="text-xs md:text-sm font-medium text-black mb-2 md:mb-3">
					Time Availability
				</p>
				<div class="flex flex-wrap gap-1.5 md:gap-2">
					<button
						v-for="(time, index) in club.availableTimes.slice(0, 4)"
						:key="index"
						class="bg-white px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm border border-neutral-light text-neutral rounded-full hover:border-main hover:text-main hover:bg-main/5 transition-all duration-200"
					>
						{{ time }}
					</button>
				</div>
			</div>

			<!-- Book Now Button -->
			<button
				@click="handleBooking"
				class="mt-6 md:mt-9 w-full bg-btn hover:bg-main text-white font-medium text-sm md:text-base lg:text-lg py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95"
			>
				BOOK NOW
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Club {
	id: number
	name: string
	image: string
	distance: number
	city: string
	price: number
	rating: number
	reviews: number
	availableTimes: string[]
}

interface Props {
	club: Club
}

const props = defineProps<Props>()

const emit = defineEmits<{
	book: [clubId: number]
}>()

const handleBooking = () => {
	emit("book", props.club.id)
}

// Format price with thousand separators
const formatPrice = (price: number) => {
	return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
</script>
