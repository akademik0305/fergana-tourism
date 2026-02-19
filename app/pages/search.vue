<script lang="ts" setup>
import type { ISearchClubs } from "~/types/api.types"

//===============================-< imports >-===============================
const route = useRoute()
const router = useRouter()
const { t } = useI18n()

//===============================-< state >-===============================
const searchValue = ref(route.query.search?.toString() || "")
const currentPage = ref(Number(route.query.page) || 1)

//===============================-< API data fetching >-===============================
const {
	data: clubs,
	pending,
	refresh,
} = await useFetch<ISearchClubs>(
	"https://api.playstat.uz/api/v1/courts-search",
	{
		params: {
			lng: 69.2,
			lat: 41.27,
			include_unavailable: 1,
			search: searchValue,
			page: currentPage,
		},
		// currentPage o'zgarganda avtomatik refresh bo'lishi uchun
		watch: [currentPage],
	},
)

//===============================-< functions >-===============================
const handleBooking = (clubId: number) => {
	console.log("Booking club:", clubId)
}

// Sahifani almashtirish funksiyasi
const changePage = (page: number) => {
	currentPage.value = page
	// URL query'ni yangilash va sahifa tepasiga skrol qilish
	router.push({
		query: { ...route.query, page: page },
	})
	window.scrollTo({ top: 0, behavior: "smooth" })
}

// Qidiruvni kechiktirib yuborish (Debounce)
let debounceTimeout: any
watch(searchValue, newVal => {
	clearTimeout(debounceTimeout)
	debounceTimeout = setTimeout(() => {
		currentPage.value = 1 // Qidiruv o'zgarganda 1-sahifaga qaytish
		router.push({ query: { ...route.query, search: newVal, page: 1 } })
		refresh()
	}, 600)
})

onMounted(() => {
	console.log("Search page initialized")
})
</script>

<template>
	<div class="wrapper">
		<section
			id="header"
			class="bg-main relative overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-28 lg:pb-40"
		>
			<div
				class="absolute top-0 left-0 w-full h-full opacity-30 lg:opacity-100"
			>
				<LazyIconsSearchHeaderLine />
			</div>
			<div class="container relative px-4 sm:px-6 mx-auto">
				<div
					class="text-white pt-12 sm:pt-16 md:pt-20 lg:pt-23 text-center max-w-5xl mx-auto"
				>
					<h1
						class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight capitalize px-4"
					>
						{{ $t("search_result.hero.title_start") }}
						<span class="text-sc">{{
							$t("search_result.hero.title_highlight")
						}}</span>
						{{ $t("search_result.hero.title_end")
						}}<br class="hidden sm:block" />
						{{ $t("search_result.hero.title_line2") }}
					</h1>

					<p
						class="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-white/90 px-4"
					>
						{{ $t("search_result.hero.subtitle")
						}}<br class="hidden sm:block" />
						{{ $t("search_result.hero.subtitle2") }}
					</p>

					<div
						class="mt-8 sm:mt-12 md:mt-16 bg-white rounded-full p-1 md:p-1.5 flex items-center gap-2 md:gap-3 shadow-xl max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-160 mx-auto hover:shadow-2xl transition-shadow"
					>
						<UIcon
							name="ic:round-search"
							class="text-gray text-lg sm:text-xl md:text-2xl ml-2 md:ml-3 shrink-0"
						/>
						<input
							type="text"
							v-model="searchValue"
							:placeholder="$t('search_result.hero.search_placeholder')"
							class="flex-1 outline-none text-gray bg-transparent text-sm sm:text-base md:text-lg py-1 md:py-1.5 pr-2"
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-white py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6 mx-auto">
				<div class="flex items-center justify-between mb-5 sm:mb-6 md:mb-8">
					<h2
						class="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-semibold text-title"
					>
						{{ $t("search_result.results.title") }}
					</h2>
				</div>

				<div
					v-if="pending"
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
				>
					<div
						v-for="n in 6"
						:key="n"
						class="h-[400px] bg-gray-100 animate-pulse rounded-2xl"
					></div>
				</div>

				<template v-else>
					<div
						v-if="clubs?.data?.length"
						class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
					>
						<ClubCard
							v-for="club in clubs.data"
							:key="club.id"
							:club="club"
							@book="handleBooking"
						/>
					</div>

					<div v-else class="text-center py-20">
						<div
							class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4"
						>
							<UIcon name="tabler:mood-empty" class="text-2xl text-gray-400" />
						</div>
						<p class="text-gray-500 text-lg italic">
							Hech qanday kort topilmadi...
						</p>
					</div>

					<BasePagination
						v-if="clubs?.pagination && clubs.pagination.last_page > 1"
						:current="currentPage"
						:last="clubs.pagination.last_page"
						@change="changePage"
					/>
				</template>
			</div>
		</section>
	</div>
</template>

<style scoped>
/* .bg-main {
  background-color: #0F172A; 
}
.text-sc {
  color: #38BDF8; 
} */
</style>
