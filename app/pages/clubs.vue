<script lang="ts" setup>
//===============================-< imports >-===============================
//> variables
const router = useRouter();
const { t, locale} = useI18n()

// cards
const cards = computed(() => [
	{
		number: 1,
		title: t("search.cards.card1.title"),
		text: t("search.cards.card1.text"),
	},
	{
		number: 2,
		title: t("search.cards.card2.title"),
		text: t("search.cards.card2.text"),
	},
	{
		number: 3,
		title: t("search.cards.card3.title"),
		text: t("search.cards.card3.text"),
	},
])

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


//===============================-< go to search page >-===============================
function gotoSearch(event: KeyboardEvent) {
	const input = event.target as HTMLInputElement
	console.log(router.getRoutes());
	
	router.push({
		name: `search___${locale.value}`,
		query: {
			search: input.value,
		},
	})
}
const handleBooking = (clubId: number) => {
	console.log("Booking club:", clubId)
}
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
						{{ $t("search.hero.title_start") }}
						<span class="text-sc">{{ $t("search.hero.title_highlight") }}</span>
						{{ $t("search.hero.title_end") }}<br class="hidden sm:block" />
						{{ $t("search.hero.title_line2") }}
					</h1>

					<p
						class="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-white/90 px-4"
					>
						{{ $t("search.hero.subtitle") }}<br class="hidden sm:block" />
						{{ $t("search.hero.subtitle2") }}
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
							type="text"
							:placeholder="$t('search.hero.search_placeholder')"
							class="flex-1 outline-none text-gray bg-transparent text-sm sm:text-base md:text-lg py-1 md:py-2 pr-2"
							@keydown.enter="gotoSearch($event)"
						/>
					</div>
				</div>
			</div>
		</section>
		<!-- Hero -->

		<!-- Feature -->
		<section class="bg-white py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6">
				<!-- Section Header -->
				<div class="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
					<h2
						class="text-2xl md:text-4xl lg:text-5xl text-title mb-2 sm:mb-3 md:mb-4 font-semibold px-4 leading-normal"
					>
						{{ $t("search.features.title") }}
					</h2>
					<p
						class="text-text text-sm sm:text-base md:text-lg lg:text-xl px-4 max-w-3xl mx-auto"
					>
						{{ $t("search.features.subtitle") }}<br class="hidden sm:block" />
						{{ $t("search.features.subtitle2") }}
					</p>
				</div>

				<!-- Features Grid -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto"
				>
					<!-- card -->
					<div
						v-for="item in cards"
						:key="item.number"
						class="bg-yellow pt-6 sm:pt-7 md:pt-8 lg:pt-9 px-4 sm:px-6 md:px-8 pb-8 sm:pb-10 md:pb-12 shadow-lg hover:shadow-xl transition-shadow rounded-xl md:rounded-2xl flex flex-col items-center justify-start gap-3 md:gap-4 text-center min-h-70 sm:min-h-80 md:min-h-85"
					>
						<div
							class="bg-main rounded-ss-[8px] md:rounded-ss-[10px] rounded-se-[4px] md:rounded-se-[5px] rounded-ee-[14px] md:rounded-ee-[18px] rounded-es-[4px] md:rounded-es-[5px] w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 inline-flex items-center justify-center font-bold text-xl sm:text-2xl text-white shrink-0"
						>
							{{ item.number }}
						</div>
						<h3
							class="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray leading-tight"
						>
							{{ item.title }}
						</h3>
						<p
							class="text-xs sm:text-sm md:text-base text-[#717171] leading-relaxed"
						>
							{{ item.text }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Feature -->

		<!-- Top club -->
		<section class="bg-white py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6">
				<!-- Section Header -->
				<div class="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
					<h2
						class="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-title"
					>
						{{ $t("search.top_clubs.title") }}
					</h2>
					<button
						class="text-main hover:text-blue-700 transition-colors flex items-center gap-1 md:gap-2 group"
						:aria-label="$t('search.top_clubs.view_all')"
					>
						<span class="hidden sm:inline text-sm md:text-base font-medium">
							{{ $t("search.top_clubs.view_all") }}
						</span>
						<UIcon
							name="dashicons:arrow-right-alt2"
							class="text-xl sm:text-2xl md:text-3xl group-hover:translate-x-1 transition-transform"
						/>
					</button>
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
						{{ $t("search.top_clubs.view_all") }}
					</button>
				</div>
			</div>
		</section>
		<!-- Top club -->

		<!-- Near clubs -->
		<section class="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6">
				<!-- Section Header -->
				<div class="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
					<h2
						class="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-title"
					>
						{{ $t("search.near_clubs.title") }}
					</h2>
					<button
						class="text-main hover:text-blue-700 transition-colors flex items-center gap-1 md:gap-2 group"
						:aria-label="$t('search.near_clubs.view_all')"
					>
						<span class="hidden sm:inline text-sm md:text-base font-medium">
							{{ $t("search.near_clubs.view_all") }}
						</span>
						<UIcon
							name="dashicons:arrow-right-alt2"
							class="text-xl sm:text-2xl md:text-3xl group-hover:translate-x-1 transition-transform"
						/>
					</button>
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
						{{ $t("search.near_clubs.view_all") }}
					</button>
				</div>
			</div>
		</section>
		<!-- Near clubs -->

		<!-- Faqs -->
		<SectionFaqs />
		<!-- Faqs -->
	</div>
</template>

<style scoped></style>
