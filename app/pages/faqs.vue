<script setup lang="ts">
//===============================-< imports >-===============================
const { t, locale } = useI18n()

//===============================-< SEO >-===============================
useHead({
	title: t("faqs.seo.title"),
	htmlAttrs: {
		lang: locale.value,
	},
})

useSeoMeta({
	title: t("faqs.seo.title"),
	ogTitle: t("faqs.seo.og_title"),
	description: t("faqs.seo.description"),
	ogDescription: t("faqs.seo.og_description"),
	ogImage: "/og-image.jpg",
	ogType: "website",
	twitterCard: "summary_large_image",
	twitterTitle: t("faqs.seo.twitter_title"),
	twitterDescription: t("faqs.seo.twitter_description"),
})

//===============================-< contact form >-===============================
const formData = ref({
	name: "",
	email: "",
	message: "",
})

const handleSubmit = () => {
	console.log("Form submitted:", formData.value)
	// Handle form submission
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
				<div class="text-center max-w-4xl mx-auto">
					<!-- Title -->
					<h1
						class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold leading-tight text-white"
					>
						{{ $t("faqs.hero.title") }}
					</h1>

					<p
						class="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/95 max-w-2xl mx-auto"
					>
						{{ $t("faqs.hero.subtitle") }}
					</p>
				</div>
			</div>
		</section>
		<!-- Hero -->

		<!-- Faqs Section -->
		<SectionFaqs />
		<!-- Faqs Section -->

		<!-- Still Have Questions Section -->
		<section class="bg-gray-50 py-12 md:py-16 lg:py-20 xl:py-24">
			<div class="container px-4 sm:px-6 lg:px-8">
				<div class="max-w-4xl mx-auto">
					<!-- Section Header -->
					<div class="text-center mb-8 md:mb-12 lg:mb-16">
						<h2
							class="text-2xl md:text-4xl lg:text-5xl font-medium text-title mb-3 md:mb-4 leading-normal"
						>
							{{ $t("faqs.contact.title") }}
						</h2>
						<p class="text-text text-base md:text-lg lg:text-xl">
							{{ $t("faqs.contact.subtitle") }}
						</p>
					</div>

					<!-- Contact Form -->
					<div
						class="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 lg:p-10"
					>
						<form @submit.prevent="handleSubmit" class="space-y-6">
							<!-- Name -->
							<label for="contact-name" class="block">
								<span
									class="block text-black text-base md:text-lg lg:text-xl mb-2 md:mb-2.5"
								>
									{{ $t("faqs.contact.name") }}
								</span>
								<input
									v-model="formData.name"
									type="text"
									name="name"
									id="contact-name"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('faqs.contact.name_placeholder')"
								/>
							</label>

							<!-- Email -->
							<label for="contact-email" class="block">
								<span
									class="block text-black text-base md:text-lg lg:text-xl mb-2 md:mb-2.5"
								>
									{{ $t("faqs.contact.email") }}
								</span>
								<input
									v-model="formData.email"
									type="email"
									name="email"
									id="contact-email"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all"
									:placeholder="$t('faqs.contact.email_placeholder')"
								/>
							</label>

							<!-- Message -->
							<label for="contact-message" class="block">
								<span
									class="block text-black text-base md:text-lg lg:text-xl mb-2 md:mb-2.5"
								>
									{{ $t("faqs.contact.message") }}
								</span>
								<textarea
									v-model="formData.message"
									name="message"
									id="contact-message"
									rows="5"
									required
									class="w-full rounded-xl md:rounded-2xl border-2 border-main px-4 md:px-6 py-2.5 md:py-3 lg:py-3.5 text-base md:text-lg text-title focus:outline-none focus:border-main focus:ring-2 focus:ring-main/20 transition-all resize-none"
									:placeholder="$t('faqs.contact.message_placeholder')"
								/>
							</label>

							<!-- Submit Button -->
							<div class="flex justify-center pt-2 md:pt-4">
								<button
									type="submit"
									class="bg-main hover:bg-main/90 text-white font-semibold px-8 md:px-12 lg:px-16 py-3 md:py-3.5 lg:py-4 text-base md:text-lg lg:text-xl transition-all hover:shadow-lg active:scale-95 min-w-50 md:min-w-62.5 rounded-full"
								>
									{{ $t("faqs.contact.submit") }}
								</button>
							</div>
						</form>
					</div>

					<!-- Contact Info -->
					<div
						class="mt-8 md:mt-12 text-center grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
					>
						<!-- Email -->
						<div class="flex flex-col items-center">
							<div
								class="w-12 h-12 md:w-14 md:h-14 bg-main rounded-full flex items-center justify-center mb-3 md:mb-4"
							>
								<UIcon
									name="ic:round-email"
									class="text-white text-2xl md:text-3xl"
								/>
							</div>
							<h3 class="text-base md:text-lg font-semibold text-title mb-1">
								{{ $t("faqs.contact.email_us") }}
							</h3>
							<a
								href="mailto:support@playstat.uz"
								class="text-sm md:text-base text-main hover:underline"
							>
								support@playstat.uz
							</a>
						</div>

						<!-- Phone -->
						<div class="flex flex-col items-center">
							<div
								class="w-12 h-12 md:w-14 md:h-14 bg-main rounded-full flex items-center justify-center mb-3 md:mb-4"
							>
								<UIcon
									name="ic:round-phone"
									class="text-white text-2xl md:text-3xl"
								/>
							</div>
							<h3 class="text-base md:text-lg font-semibold text-title mb-1">
								{{ $t("faqs.contact.call_us") }}
							</h3>
							<a
								href="tel:+998712345678"
								class="text-sm md:text-base text-main hover:underline"
							>
								+998 71 234 56 78
							</a>
						</div>

						<!-- Location -->
						<div class="flex flex-col items-center sm:col-span-3 md:col-span-1">
							<div
								class="w-12 h-12 md:w-14 md:h-14 bg-main rounded-full flex items-center justify-center mb-3 md:mb-4"
							>
								<UIcon
									name="ic:round-location-on"
									class="text-white text-2xl md:text-3xl"
								/>
							</div>
							<h3 class="text-base md:text-lg font-semibold text-title mb-1">
								{{ $t("faqs.contact.visit_us") }}
							</h3>
							<p class="text-sm md:text-base text-gray text-center">
								{{ $t("faqs.contact.address") }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Still Have Questions Section -->
	</div>
</template>
