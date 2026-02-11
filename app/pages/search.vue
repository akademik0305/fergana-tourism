<script lang="ts" setup>
//===============================-< imports >-===============================
//> variables
const route = useRoute()
//> functions

// clubs
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

const clubs = ref<Club[]>([
	{
		id: 1,
		name: "Toshkent tennis club",
		image: "./club-1.png",
		distance: 1000,
		city: "Tashkent city",
		price: 200000,
		rating: 4.2,
		reviews: 124,
		availableTimes: ["5:30PM", "7:30PM", "5:30PM", "5:30PM"],
	},
	{
		id: 2,
		name: "Toshkent tennis club",
		image: "./club-2.png",
		distance: 1000,
		city: "Tashkent city",
		price: 200000,
		rating: 4.2,
		reviews: 124,
		availableTimes: ["5:30PM", "7:30PM", "5:30PM", "5:30PM"],
	},
	{
		id: 3,
		name: "Toshkent tennis club",
		image: "./club-3.png",
		distance: 1000,
		city: "Tashkent city",
		price: 200000,
		rating: 4.2,
		reviews: 124,
		availableTimes: ["5:30PM", "7:30PM", "5:30PM", "5:30PM"],
	},
])

const handleBooking = (clubId: number) => {
	console.log("Booking club:", clubId)
}

//===============================-< search clubs >-===============================
//> variables
const searchValue = ref("")
//> functions

//===============================-< on page load >-===============================
//> variables
//> functions
onMounted(() => {
	searchValue.value = route.query.search?.toString() || ""

  console.log(route.params);
  
})
</script>

<template>
	<div class="wrapper">
		<!-- Hero -->
		<section
			id="header"
			class="bg-main relative overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 lg:pb-40"
		>
			<div
				class="absolute top-0 left-0 w-full h-full opacity-30 lg:opacity-100"
			>
				<LazyIconsSearchHeaderLine />
			</div>
			<div class="container relative px-4 sm:px-6">
				<!-- Content -->
				<div
					class="text-white pt-12 sm:pt-16 md:pt-20 lg:pt-23 text-center max-w-5xl mx-auto"
				>
					<h1
						class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight capitalize px-4"
					>
						Find a <span class="text-sc">padel club</span> and<br
							class="hidden sm:block"
						/>
						start playing
					</h1>

					<p
						class="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-white/90 px-4"
					>
						Find Matches And Courts Worldwide,<br class="hidden sm:block" />
						Connect Anytime, Anywhere
					</p>

					<!-- Search Bar -->
					<div
						class="mt-8 sm:mt-12 md:mt-16 bg-white rounded-full p-1 md:p-1.5 flex items-center gap-2 md:gap-3 shadow-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-160 mx-auto hover:shadow-2xl transition-shadow"
					>
						<UIcon
							name="ic:round-search"
							class="text-gray text-lg sm:text-xl md:text-2xl ml-2 md:ml-3 shrink-0"
						/>
						<input
							id="search"
							type="text"
							placeholder="Address, Club, Place"
							class="flex-1 outline-none text-gray bg-transparent text-sm sm:text-base md:text-lg py-1 md:py-2 pr-2"
              v-model="searchValue"
						/>
					</div>
				</div>
			</div>
		</section>
		<!-- Hero -->

		<!-- seach result -->
		<section class="bg-white py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6">
				<!-- Section Header -->
				<div class="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
					<h2
						class="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-title"
					>
						Search result
					</h2>
				</div>

				<!-- Clubs Grid -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
				>
					<ClubCard
						v-for="club in clubs"
						:key="club.id"
						:club="club"
						@book="handleBooking"
					/>
				</div>

				<!-- View More Button - Mobile Only -->
				<div class="sm:hidden mt-6 text-center">
					<button
						class="w-full sm:w-auto bg-main hover:bg-main/90 text-white font-medium px-8 py-3 rounded-xl transition-colors text-base"
					>
						View All Clubs
					</button>
				</div>
			</div>
		</section>
		<!-- seach result -->
	</div>
</template>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
