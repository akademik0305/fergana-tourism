<script setup lang="ts">
//===============================-< imports >-===============================
//> variables
const router = useRouter()
const { t } = useI18n()
const localePath = useLocalePath()
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
//===============================-< go to search page >-===============================
function gotoSearch(event: KeyboardEvent) {
	const input = event.target as HTMLInputElement
	router.push({
		name: "search",
		query: {
			search: input.value,
		},
	})
}
</script>

<template>
	<div class="min-h-screen">
		<!-- Hero -->
		<section id="header" class="bg-main relative overflow-hidden pt-20 md:pt-32 lg:pt-40 pb-10 md:pb-16 lg:pb-0">
			<div class="absolute top-0 left-0 w-full h-full">
				<LazyIconsHeaderLine />
			</div>
			<div class="container relative px-4">
				<div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-15 items-center">
					<!-- Left Content -->
					<div class="text-white space-y-4 md:space-y-6">
						<h1 class="text-3xl md:text-4xl lg:text-[54px] font-bold leading-tight">
							{{ $t('home.hero.title_start') }} <span class="text-lime-400">{{ $t('home.hero.title_courts') }}</span><br />
							& <span class="text-lime-400">{{ $t('home.hero.title_players') }}</span> {{ $t('home.hero.title_end') }}
						</h1>

						<p class="text-lg md:text-xl lg:text-2xl leading-tight text-white">
							{{ $t('home.hero.subtitle') }}<br class="hidden sm:block" />
							{{ $t('home.hero.subtitle2') }}
						</p>

						<!-- Search Bar -->
						<div class="bg-white rounded-full p-2 flex items-center gap-3 shadow-lg max-w-full md:max-w-160">
							<UIcon name="ic:round-search" class="text-gray text-xl md:text-2xl ml-2" />
							<input
								id="search"
								type="text"
								:placeholder="$t('home.hero.search_placeholder')"
								class="flex-1 outline-none text-gray bg-transparent text-sm sm:text-base md:text-lg py-1 md:py-1.5 pr-2"
								@keydown.enter="gotoSearch($event)"
							/>
						</div>

						<!-- App Store Buttons -->
						<div class="flex gap-3 md:gap-6 mt-6 md:mt-10">
							<a href="#" class="inline-block">
								<img src="~/assets/images/png/play.png" :alt="$t('home.hero.google_play')" class="h-10 md:h-12 rounded-lg" />
							</a>
							<a href="#" class="inline-block">
								<img src="~/assets/images/png/app.png" :alt="$t('home.hero.app_store')" class="h-10 md:h-12 rounded-lg" />
							</a>
						</div>
					</div>

					<!-- Right Content - Mobile Mockup -->
					<div class="relative hidden lg:block">
						<div class="relative mx-auto w-100">
							<img src="~/assets/images/png/header.png" alt="phone" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Hero -->

		<!-- Feature -->
		<section class="bg-white py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<!-- Section Header -->
				<div class="text-center mb-10 md:mb-16">
					<h2 class="text-2xl md:text-4xl lg:text-5xl text-title mb-3 md:mb-4 font-semibold">
						{{ $t('home.features.title') }}
					</h2>
					<p class="text-text text-base md:text-lg lg:text-xl px-4">
						{{ $t('home.features.subtitle') }}<br class="hidden sm:block" />
						{{ $t('home.features.subtitle2') }}
					</p>
				</div>

				<!-- Features Grid -->
				<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
					<!-- Feature 1: Easy to Search -->
					<div class="flex flex-col items-center text-center">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-blue-600 rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/search.svg" alt="search" class="w-12 md:w-auto" />
							</div>
							<div class="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-78 pl-2">
								<img src="~/assets/images/svg/line.svg" class="w-full h-auto object-contain" alt="line" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-title mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('home.features.search_title') }}
						</h3>
						<p class="text-text text-sm md:text-base leading-relaxed px-2">
							{{ $t('home.features.search_text') }}
						</p>
					</div>

					<!-- Feature 2: Booking -->
					<div class="flex flex-col items-center text-center">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-blue-600 rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/booking.svg" alt="booking" class="w-12 md:w-auto" />
							</div>
							<div class="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-78 pl-2">
								<img src="~/assets/images/svg/line.svg" class="w-full h-auto object-contain" alt="line" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-title mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('home.features.booking_title') }}
						</h3>
						<p class="text-text text-sm md:text-base leading-relaxed px-2">
							{{ $t('home.features.booking_text') }}
						</p>
					</div>

					<!-- Feature 3: Fast Payments -->
					<div class="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-blue-600 rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/payment.svg" alt="payment" class="w-12 md:w-auto" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-title mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('home.features.payment_title') }}
						</h3>
						<p class="text-text text-sm md:text-base leading-relaxed px-2">
							{{ $t('home.features.payment_text') }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Feature -->

		<!-- About -->
		<section class="py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<div class="flex flex-col lg:flex-row gap-5 items-stretch">
					<!-- Left Content -->
					<div class="flex flex-col justify-between bg-yellow rounded-2xl p-6 md:p-8 lg:p-11 order-2 lg:order-1">
						<!-- Title Section -->
						<div>
							<h2 class="text-2xl md:text-3xl lg:text-[40px] font-medium text-title mb-3 md:mb-4">
								{{ $t('home.about.title') }}
							</h2>
							<p class="text-black font-light text-base md:text-lg lg:text-[20px]">
								{{ $t('home.about.subtitle') }}
							</p>
						</div>

						<!-- We help you Section -->
						<div class="mt-8 lg:mt-0">
							<h3 class="text-xl md:text-2xl lg:text-3xl font-medium text-black">
								{{ $t('home.about.we_help') }}
							</h3>
							<div class="mt-6 md:mt-10">
								<!-- Feature 1 -->
								<div class="flex gap-3 items-start border-t border-border py-5 md:py-8">
									<div class="shrink-0">
										<div class="w-7 h-7 md:w-8 md:h-8 bg-main rounded-full flex items-center justify-center p-1.5 md:p-2">
											<lazy-icons-search color="#B6FF03" />
										</div>
									</div>
									<div>
										<p class="text-subtext leading-relaxed text-sm md:text-base">
											{{ $t('home.about.feature1') }}
										</p>
									</div>
								</div>

								<!-- Feature 2 -->
								<div class="flex gap-3 md:gap-4 items-start border-t border-border py-5 md:py-8">
									<div class="shrink-0">
										<div class="w-7 h-7 md:w-8 md:h-8 bg-main rounded-full flex items-center justify-center p-1.5 md:p-2">
											<lazy-icons-google-play color="#B6FF03" />
										</div>
									</div>
									<div>
										<p class="text-subtext leading-relaxed text-sm md:text-base">
											{{ $t('home.about.feature2') }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Image -->
					<div class="relative w-full lg:max-w-116 order-1 lg:order-2">
						<div class="relative rounded-3xl overflow-hidden">
							<img src="~/assets/images/png/what-playstat.png" alt="Tennis player"
								class="w-full h-64 md:h-96 lg:h-full lg:max-h-175 object-cover" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- About -->

		<!-- Top club -->
		<section class="bg-white py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<!-- Section Header -->
				<div class="flex items-center justify-between mb-6">
					<h2 class="text-2xl md:text-3xl lg:text-[40px] font-semibold text-title">
						{{ $t('home.top_clubs.title') }}
					</h2>
					<button class="text-main hover:text-blue-700 transition-colors flex items-center gap-2">
						<UIcon name="dashicons:arrow-right-alt2" class="text-2xl md:text-3xl" />
					</button>
				</div>

				<!-- Clubs Grid -->
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<ClubCard v-for="club in clubs" :key="club.id" :club="club" @book="handleBooking" />
				</div>
			</div>
		</section>
		<!-- Top club -->

		<!-- players -->
		<section class="bg-main py-10 lg:py-14 relative overflow-hidden">
			<div class="absolute top-0 left-0 w-full h-full">
				<lazy-icons-players-line />
			</div>

			<div class="container relative px-4">
				<div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-stretch">
					<!-- Left Image -->
					<div class="relative rounded-3xl overflow-hidden shadow-2xl w-full lg:max-w-116 order-2 lg:order-1">
						<img src="~/assets/images/png/players.png" alt="Tennis court"
							class="w-full h-64 md:h-96 lg:h-full object-cover" />
					</div>

					<!-- Right Content -->
					<div class="flex flex-col justify-between py-6 md:py-8 lg:py-12 order-1 lg:order-2">
						<!-- Title Section -->
						<div class="max-w-full lg:max-w-100">
							<h2 class="text-2xl md:text-3xl lg:text-[40px] font-medium text-white mb-3 md:mb-4">
								{{ $t('home.players.title') }}
							</h2>
							<p class="text-white font-light text-base md:text-lg lg:text-[20px] leading-[120%]">
								{{ $t('home.players.subtitle') }}
							</p>
						</div>

						<!-- features -->
						<div class="max-w-full lg:max-w-125 mt-6 lg:mt-0">
							<div>
								<!-- Feature 1 -->
								<div class="flex gap-3 items-start border-t border-border py-5 md:py-8">
									<div class="shrink-0">
										<div class="w-7 h-7 md:w-8 md:h-8 bg-sc rounded-full flex items-center justify-center p-1.5 md:p-2">
											<lazy-icons-search />
										</div>
									</div>
									<div>
										<p class="text-white leading-relaxed text-sm md:text-base">
											{{ $t('home.players.feature1') }}
										</p>
									</div>
								</div>

								<!-- Feature 2 -->
								<div class="flex gap-3 md:gap-4 items-start border-t border-border py-5 md:py-8">
									<div class="shrink-0">
										<div class="w-7 h-7 md:w-8 md:h-8 bg-sc rounded-full flex items-center justify-center p-1.5 md:p-2">
											<lazy-icons-google-play />
										</div>
									</div>
									<div>
										<p class="text-white leading-relaxed text-sm md:text-base">
											{{ $t('home.players.feature2') }}
										</p>
									</div>
								</div>

								<!-- Feature 3 -->
								<div class="flex gap-3 md:gap-4 items-start border-t border-border py-5 md:py-8">
									<div class="shrink-0">
										<div class="w-7 h-7 md:w-8 md:h-8 bg-sc rounded-full flex items-center justify-center p-1.5 md:p-2">
											<lazy-icons-user />
										</div>
									</div>
									<div>
										<p class="text-white leading-relaxed text-sm md:text-base">
											{{ $t('home.players.feature3') }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- players -->

		<!-- Connect -->
		<section class="bg-gray-50 py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<div class="flex flex-col lg:flex-row items-stretch gap-8 md:gap-10 lg:gap-14 justify-between">
					<!-- Left Content -->
					<div class="flex flex-col justify-between py-6 md:py-8 lg:py-11 order-2 lg:order-1">
						<!-- Title -->
						<div>
							<h2 class="text-2xl md:text-4xl lg:text-6xl font-medium text-title">
								{{ $t('home.connect.title') }}
							</h2>

							<!-- Features List -->
							<div class="space-y-2 md:space-y-3 mt-6 md:mt-8">
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.connect.feature1') }}
								</p>
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.connect.feature2') }}
								</p>
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.connect.feature3') }}
								</p>
							</div>
						</div>

						<!-- Download Button -->
						<button
							class="bg-main hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition-colors text-base md:text-lg shadow-lg hover:shadow-xl w-max mt-6 lg:mt-0">
							{{ $t('home.connect.download_btn') }}
						</button>
					</div>

					<!-- Right Image with Phone Mockups -->
					<div class="relative order-1 lg:order-2">
						<div class="relative rounded-3xl overflow-hidden shadow-2xl">
							<img src="~/assets/images/png/connect.png" alt="Tennis players"
								class="w-full h-64 md:h-96 lg:h-auto object-cover" />
						</div>
						<div class="hidden xl:flex absolute bottom-10 -left-48 flex-col items-end">
							<div class="shadow-2xl rounded-2xl overflow-hidden">
								<img src="~/assets/images/png/connect-search.png" alt="search image" />
							</div>
							<div class="mt-2 shadow-2xl rounded-2xl overflow-hidden">
								<img src="~/assets/images/png/connect-add.png" alt="add image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Connect -->

		<!-- Clubs -->
		<section class="py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<div class="flex flex-col lg:flex-row items-stretch justify-between gap-5 md:gap-6">
					<!-- Left Image -->
					<div class="relative order-2 lg:order-1">
						<div class="relative rounded-3xl overflow-hidden shadow-2xl">
							<img src="~/assets/images/png/clubs.png" alt="Club manager"
								class="w-full h-64 md:h-96 lg:h-auto object-cover" />
						</div>
					</div>

					<!-- Right Content -->
					<div
						class="flex-1 w-full flex flex-col justify-between bg-card-bg px-6 md:px-10 lg:px-16 py-6 md:py-8 lg:py-11 rounded-3xl order-1 lg:order-2">
						<!-- Title -->
						<div>
							<h2 class="text-2xl md:text-4xl lg:text-6xl font-medium text-title">
								{{ $t('home.clubs.title') }}
							</h2>

							<!-- Features List -->
							<div class="space-y-2 md:space-y-3 mt-6 md:mt-8">
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.clubs.feature1') }}
								</p>
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.clubs.feature2') }}
								</p>
								<p class="text-lg md:text-xl lg:text-2xl text-black">
									{{ $t('home.clubs.feature3') }}
								</p>
							</div>
						</div>

						<!-- Button -->
						<button
							class="bg-main hover:bg-blue-700 text-white font-medium px-6 md:px-8 py-2.5 md:py-3 rounded-xl transition-colors text-base md:text-lg shadow-lg hover:shadow-xl w-max mt-6 lg:mt-0">
							{{ $t('home.clubs.btn') }}
						</button>
					</div>
				</div>
			</div>
		</section>
		<!-- Clubs -->

		<!-- Testimonal -->
		<section class="bg-white py-12 md:py-16 lg:py-24">
			<div class="container mx-auto px-4">
				<!-- Section Header -->
				<div class="flex items-center justify-between mb-8 md:mb-12">
					<h2 class="text-2xl md:text-3xl lg:text-[40px] font-medium text-title">
						{{ $t('home.testimonials.title') }}
					</h2>
					<button class="text-main hover:text-blue-700 transition-colors flex items-center gap-2">
						<UIcon name="dashicons:arrow-right-alt2" class="text-2xl md:text-3xl" />
					</button>
				</div>

				<!-- Testimonials Grid -->
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<div v-for="item in 3" :key="item"
						class="bg-btn rounded-tr-[60px] md:rounded-tr-[90px] rounded-bl-[60px] md:rounded-bl-[90px] rounded-tl-xl rounded-br-xl py-10 md:py-16 px-6 md:px-8 text-white space-y-4 md:space-y-6 hover:bg-blue-700 transition-colors">
						<!-- Stars -->
						<div class="flex gap-1">
							<UIcon name="basil:star-solid" v-for="star in 5" :key="star"
								class="w-5 h-5 md:w-6 md:h-6 fill-current text-xl md:text-2xl"
								:class="star <= Math.floor(3) ? 'text-yellow-400' : 'text-gray-300'" />
						</div>

						<!-- Testimonial Text -->
						<p class="text-sm md:text-base leading-relaxed">
							{{ $t('home.testimonials.text') }}
						</p>

						<!-- User Info -->
						<div class="mt-20 md:mt-32 flex items-center gap-3 pt-6 md:pt-8">
							<div class="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full overflow-hidden shrink-0">
								<img src="~/assets/images/png/person-1.png" alt="Maxin Will"
									class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="font-semibold text-sm md:text-base">Maxin Will</p>
								<p class="text-xs md:text-sm text-blue-200">{{ $t('home.testimonials.role') }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Testimonal -->
	</div>
</template>