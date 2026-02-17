<script setup lang="ts">
//===============================-< imports >-===============================
//> variables
const router = useRouter()
const { t } = useI18n()
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

//===============================-< send >-===============================
const formData = ref({
	name: "",
	lastName: "",
	email: "",
	phoneCode: "+998",
	phoneNumber: "",
	clubName: "",
	clubType: "",
	clubStatus: "",
	country: "",
	typeOfCourt: "",
	courtsNumbers: "",
	sports: "",
	academy: "",
})

const countries = [
	{ code: "+93", name: "Afghanistan", flag: "🇦🇫" },
	{ code: "+998", name: "Uzbekistan", flag: "🇺🇿" },
	{ code: "+7", name: "Russia", flag: "🇷🇺" },
	{ code: "+1", name: "USA", flag: "🇺🇸" },
	{ code: "+44", name: "UK", flag: "🇬🇧" },
]

const showCountrySelect = ref(false)

const selectCountry = (country: any) => {
	formData.value.phoneCode = country.code
	showCountrySelect.value = false
}

const handleSubmit = () => {
	console.log("Form submitted:", formData.value)
}
</script>

<template>
	<div class="min-h-screen">
		<!-- Hero -->
		<section
			id="header"
			class="bg-main relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-36 xl:pt-40 pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-25"
		>
			<div class="container relative px-4 sm:px-6 lg:px-8">
				<div class="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center">
					<!-- Left Content -->
					<div class="text-white space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
						<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight">
							{{ $t('manager.hero.title') }}
						</h1>

						<p class="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-xl mx-auto lg:mx-0">
							{{ $t('manager.hero.subtitle') }} <br class="hidden sm:block" />
							{{ $t('manager.hero.subtitle2') }}
						</p>

						<!-- Info btn -->
						<div class="pt-2 md:pt-4">
							<button
								class="bg-sc text-main font-medium px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-2.5 sm:py-3 md:py-3.5 rounded-full hover:bg-white transition-all duration-300 text-sm sm:text-base lg:text-lg xl:text-xl hover:shadow-lg active:scale-95 inline-flex items-center gap-2"
							>
								{{ $t('manager.hero.btn') }}
							</button>
						</div>
					</div>

					<!-- Right Content - Mobile Mockup -->
					<div class="relative hidden lg:block">
						<div class="relative mx-auto w-full max-w-125 xl:max-w-140 2xl:max-w-140">
							<img
								src="~/assets/images/png/manager-hero.png"
								alt="Playstat Manager App Interface"
								class="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Hero -->

		<!-- Clubs -->
		<section class="py-12 md:py-16 lg:py-24">
			<div class="container px-4">
				<div class="flex flex-col lg:flex-row items-stretch justify-between gap-5 md:gap-6">
					<!-- Left Image -->
					<div class="relative order-2 lg:order-1">
						<div class="relative rounded-3xl overflow-hidden shadow-2xl">
							<img
								src="~/assets/images/png/clubs.png"
								alt="Club manager"
								class="w-full h-64 md:h-96 lg:h-auto object-cover"
							/>
						</div>
					</div>

					<!-- Right Content -->
					<div class="flex-1 w-full flex flex-col justify-between px-6 md:px-10 lg:px-16 py-6 md:py-8 lg:py-11 rounded-3xl order-1 lg:order-2">
						<!-- Title -->
						<div>
							<h2 class="text-2xl md:text-4xl lg:text-6xl font-medium text-title">
								{{ $t('manager.clubs.title') }}
							</h2>

							<!-- Features List -->
							<div class="space-y-2 md:space-y-3 mt-6 md:mt-8">
								<p class="text-lg md:text-xl lg:text-2xl text-black leading-loose">
									{{ $t('manager.clubs.text1') }}
								</p>

								<p class="mt-8 text-lg md:text-xl lg:text-2xl text-black leading-loose">
									{{ $t('manager.clubs.text2') }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Clubs -->

		<!-- Feature -->
		<section class="bg-main py-12 md:py-16 lg:py-24 text-white">
			<div class="container px-4">
				<!-- Section Header -->
				<div class="text-center mb-10 md:mb-16">
					<h2 class="text-2xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-4 font-semibold">
						{{ $t('manager.feature.title') }}
					</h2>
				</div>

				<!-- Features Grid -->
				<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
					<!-- Feature 1 -->
					<div class="flex flex-col items-center text-center">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-white rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/efficiency.svg" alt="efficiency" class="w-12 md:w-auto" />
							</div>
							<div class="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-78 pl-2">
								<img src="~/assets/images/svg/line-white.svg" class="w-full h-auto object-contain" alt="line" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('manager.feature.f1_title') }}
						</h3>
						<p class="text-white text-sm md:text-base leading-relaxed px-2">
							{{ $t('manager.feature.f1_text') }}
						</p>
					</div>

					<!-- Feature 2 -->
					<div class="flex flex-col items-center text-center">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-white rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/loyalty.svg" alt="loyalty" class="w-12 md:w-auto" />
							</div>
							<div class="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-78 pl-2">
								<img src="~/assets/images/svg/line-white.svg" class="w-full h-auto object-contain" alt="line" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('manager.feature.f2_title') }}
						</h3>
						<p class="text-white text-sm md:text-base leading-relaxed px-2">
							{{ $t('manager.feature.f2_text') }}
						</p>
					</div>

					<!-- Feature 3 -->
					<div class="flex flex-col items-center text-center sm:col-span-2 md:col-span-1">
						<div class="relative mb-6 md:mb-8">
							<div class="bg-white rounded-3xl md:rounded-4xl overflow-hidden flex items-center justify-center relative z-10 p-5 md:p-7">
								<img src="~/assets/images/svg/growth.svg" alt="growth" class="w-12 md:w-auto" />
							</div>
						</div>
						<h3 class="text-xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-3 uppercase font-semibold">
							{{ $t('manager.feature.f3_title') }}
						</h3>
						<p class="text-white text-sm md:text-base leading-relaxed px-2">
							{{ $t('manager.feature.f3_text') }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Feature -->

		<!-- features -->
		<section class="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6">
				<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium text-title mb-6 md:mb-8 lg:mb-10">
					{{ $t('manager.powerful.title') }}
				</h2>
				<div class="mt-6 sm:mt-8 md:mt-10 flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 justify-between">
					<!-- Left Content -->
					<div class="flex flex-col items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 py-4 sm:py-5 md:py-6 w-full lg:w-auto lg:min-w-70 xl:min-w-87.5 2xl:min-w-100">
						<!-- Booking Button -->
						<button
							class="bg-main hover:bg-blue-700 text-white font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-center sm:justify-start uppercase"
						>
							<img src="~/assets/images/svg/check.svg" alt="booking" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							{{ $t('manager.powerful.booking') }}
						</button>

						<div class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center uppercase text-title w-full sm:w-auto">
							<div class="flex items-center justify-center rounded-full bg-main w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 shrink-0">
								<img src="~/assets/images/svg/ping-pong.svg" alt="matches" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							</div>
							{{ $t('manager.powerful.matches') }}
						</div>

						<div class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center uppercase text-title w-full sm:w-auto">
							<div class="flex items-center justify-center rounded-full bg-main w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 shrink-0">
								<img src="~/assets/images/svg/book.svg" alt="classes" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							</div>
							{{ $t('manager.powerful.classes') }}
						</div>

						<div class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center uppercase text-title w-full sm:w-auto">
							<div class="flex items-center justify-center rounded-full bg-main w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 shrink-0">
								<img src="~/assets/images/svg/wallet.svg" alt="payments" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							</div>
							{{ $t('manager.powerful.payments') }}
						</div>

						<div class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center uppercase text-title w-full sm:w-auto">
							<div class="flex items-center justify-center rounded-full bg-main w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 shrink-0">
								<img src="~/assets/images/svg/calculator.svg" alt="billings" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							</div>
							{{ $t('manager.powerful.billings') }}
						</div>

						<div class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center uppercase text-title w-full sm:w-auto">
							<div class="flex items-center justify-center rounded-full bg-main w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 shrink-0">
								<img src="~/assets/images/svg/file.svg" alt="reporting" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
							</div>
							{{ $t('manager.powerful.reporting') }}
						</div>
					</div>

					<!-- Right Image -->
					<div class="relative order-1 lg:order-2 flex-1">
						<div class="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
							<img
								src="~/assets/images/png/booking.png"
								alt="Feature preview"
								class="w-full h-64 sm:h-80 md:h-96 lg:h-full max-h-125 xl:max-h-150 2xl:max-h-175 object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- features -->

		<!-- Request Section -->
		<section class="bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6 lg:px-8">
				<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-title text-center mb-8 md:mb-12 lg:mb-16">
					{{ $t('manager.form.title') }}
				</h2>

				<div class="max-w-6xl mx-auto">
					<form @submit.prevent="handleSubmit" class="space-y-6 md:space-y-8">
						<!-- Name & Last Name -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
							<label for="name" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.name') }}
								</span>
								<input
									v-model="formData.name"
									type="text"
									name="name"
									id="name"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.name_placeholder')"
								/>
							</label>

							<label for="lname" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.last_name') }}
								</span>
								<input
									v-model="formData.lastName"
									type="text"
									name="lname"
									id="lname"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.last_name_placeholder')"
								/>
							</label>
						</div>

						<!-- Email & Phone -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
							<label for="email" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.email') }}
								</span>
								<input
									v-model="formData.email"
									type="email"
									name="email"
									id="email"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.email_placeholder')"
								/>
							</label>

							<label for="phone" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.phone') }}
								</span>
								<div class="flex gap-2">
									<!-- Country Code Selector -->
									<div class="relative">
										<button
											type="button"
											@click="showCountrySelect = !showCountrySelect"
											class="h-full rounded-xl md:rounded-2xl border-2 border-main px-3 md:px-4 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-gray bg-white hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap"
										>
											<span class="text-lg md:text-xl">🇺🇿</span>
											<span class="hidden sm:inline">Uzbekistan</span>
											<UIcon name="ic:round-keyboard-arrow-down" class="text-xl" />
										</button>

										<!-- Dropdown -->
										<Transition
											enter-active-class="transition ease-out duration-200"
											enter-from-class="opacity-0 translate-y-1"
											enter-to-class="opacity-100 translate-y-0"
											leave-active-class="transition ease-in duration-150"
											leave-from-class="opacity-100 translate-y-0"
											leave-to-class="opacity-0 translate-y-1"
										>
											<div
												v-show="showCountrySelect"
												class="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 z-10 overflow-hidden min-w-[200px]"
											>
												<button
													v-for="country in countries"
													:key="country.code"
													type="button"
													@click="selectCountry(country)"
													class="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm md:text-base transition-colors"
												>
													<span>{{ country.flag }}</span>
													<span>{{ country.name }}</span>
													<span class="text-gray ml-auto">{{ country.code }}</span>
												</button>
											</div>
										</Transition>
									</div>

									<!-- Phone Code -->
									<input
										v-model="formData.phoneCode"
										type="text"
										readonly
										class="w-20 md:w-24 rounded-xl md:rounded-2xl border-2 border-main px-3 md:px-4 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-center text-gray bg-gray-50"
									/>

									<!-- Phone Number -->
									<input
										v-model="formData.phoneNumber"
										type="tel"
										name="phone"
										id="phone"
										required
										class="flex-1 rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
										:placeholder="$t('manager.form.phone_placeholder')"
									/>
								</div>
							</label>
						</div>

						<!-- Club Name, Club Type, Club Status -->
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
							<label for="clubName" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.club_name') }}
								</span>
								<input
									v-model="formData.clubName"
									type="text"
									name="clubName"
									id="clubName"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.club_name_placeholder')"
								/>
							</label>

							<label for="clubType" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.club_type') }}
								</span>
								<input
									v-model="formData.clubType"
									type="text"
									name="clubType"
									id="clubType"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.club_type_placeholder')"
								/>
							</label>

							<label for="clubStatus" class="block sm:col-span-2 lg:col-span-1">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.club_status') }}
								</span>
								<input
									v-model="formData.clubStatus"
									type="text"
									name="clubStatus"
									id="clubStatus"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.club_status_placeholder')"
								/>
							</label>
						</div>

						<!-- Country -->
						<label for="country" class="block">
							<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
								{{ $t('manager.form.country') }}
							</span>
							<input
								v-model="formData.country"
								type="text"
								name="country"
								id="country"
								class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
								:placeholder="$t('manager.form.country_placeholder')"
							/>
						</label>

						<!-- Type Of Court, Courts Numbers, Sports -->
						<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
							<label for="typeOfCourt" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.court_type') }}
								</span>
								<input
									v-model="formData.typeOfCourt"
									type="text"
									name="typeOfCourt"
									id="typeOfCourt"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.court_type_placeholder')"
								/>
							</label>

							<label for="courtsNumbers" class="block">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.courts_numbers') }}
								</span>
								<input
									v-model="formData.courtsNumbers"
									type="number"
									name="courtsNumbers"
									id="courtsNumbers"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.courts_numbers_placeholder')"
								/>
							</label>

							<label for="sports" class="block sm:col-span-2 lg:col-span-1">
								<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
									{{ $t('manager.form.sports') }}
								</span>
								<input
									v-model="formData.sports"
									type="text"
									name="sports"
									id="sports"
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('manager.form.sports_placeholder')"
								/>
							</label>
						</div>

						<!-- Academy -->
						<label for="academy" class="block">
							<span class="block text-black text-base md:text-lg lg:text-2xl mb-2 md:mb-2.5">
								{{ $t('manager.form.academy') }}
							</span>
							<input
								v-model="formData.academy"
								type="text"
								name="academy"
								id="academy"
								class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
								:placeholder="$t('manager.form.academy_placeholder')"
							/>
						</label>

						<!-- Submit Button -->
						<div class="flex justify-center pt-4 md:pt-6">
							<button
								type="submit"
								class="bg-main hover:bg-main/90 text-white font-semibold px-8 md:px-12 lg:px-16 py-3 md:py-4 text-base md:text-lg lg:text-xl transition-all hover:shadow-lg active:scale-95 min-w-50 md:min-w-62.5 rounded-full"
							>
								{{ $t('manager.form.submit') }}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
		<!-- Request -->

		<!-- Faqs -->
		<SectionFaqs />
		<!-- Faqs -->
	</div>
</template>