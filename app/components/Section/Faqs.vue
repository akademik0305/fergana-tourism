<script lang="ts" setup>
import { ref } from 'vue'

interface FAQ {
	question: string
	answer: string
}

const faqs = ref<FAQ[]>([
	{
		question: "What is Playstat?",
		answer:
			"Playstat is a smart platform for padel, tennis, and racket sport players in Uzbekistan to easily find clubs, book courts, and start playing with confidence. Whether you're a beginner or an experienced player, Playstat helps you discover nearby clubs, connect with other players, and enjoy the game at your own level.",
	},
	{
		question: "What is a Padel courts?",
		answer:
			"A padel court is an enclosed playing area designed specifically for padel tennis. It typically measures 20m x 10m and features glass walls and metal mesh fencing. The court combines elements of tennis and squash, with walls being an integral part of the game.",
	},
	{
		question: "How do I find near courts?",
		answer:
			"Finding nearby courts is easy with Playstat! Simply use our search feature with your location, and we'll show you all available courts in your area. You can filter by distance, price, facilities, and available time slots to find the perfect match for your needs.",
	},
	{
		question: "Can beginner play courts?",
		answer:
			"Absolutely! Playstat welcomes players of all skill levels. Many courts offer beginner-friendly sessions and coaching. When booking, you can specify your skill level, and we'll help match you with appropriate courts and playing partners.",
	},
	{
		question: "Can I bring my own equipment to play on a padel court??",
		answer:
			"Yes, you can bring your own padel racket and balls. However, most courts also offer equipment rental if you don't have your own. We recommend checking with the specific venue about their equipment policies and rental options when booking.",
	},
])

const openIndex = ref<number | null>(0)

const toggleFAQ = (index: number) => {
	openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
	<!-- FAQ Section -->
	<section class="bg-white py-12 md:py-16 lg:py-24">
		<div class="container px-4">
			<!-- Section Header -->
			<div class="mb-8 md:mb-12">
				<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-title">
					FAQs
				</h2>
			</div>

			<!-- FAQ Accordion -->
			<div class="space-y-0">
				<div
					v-for="(faq, index) in faqs"
					:key="index"
					class="border-t border-black/80 last:border-b"
				>
					<!-- Question Button -->
					<button
						@click="toggleFAQ(index)"
						class="w-full flex items-center justify-between gap-4 py-5 md:py-6 lg:py-8 text-left hover:text-main transition-colors group"
					>
						<h3 class="text-lg md:text-xl lg:text-[26px] font-normal text-title group-hover:text-main transition-colors pr-4">
							{{ faq.question }}
						</h3>
						
						<!-- Icon -->
						<UIcon 
							:name="openIndex === index ? 'ic:round-remove' : 'ic:round-add'"
							class="text-2xl md:text-3xl lg:text-4xl shrink-0 transition-all duration-300"
							:class="openIndex === index ? 'text-main rotate-180' : 'text-black group-hover:text-main'"
						/>
					</button>

					<!-- Answer Content -->
					<Transition
						enter-active-class="transition-all duration-500 ease-out"
						leave-active-class="transition-all duration-400 ease-in"
						enter-from-class="opacity-0 -translate-y-2"
						enter-to-class="opacity-100 translate-y-0"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 -translate-y-2"
					>
						<div v-show="openIndex === index" class="overflow-hidden">
							<div class="pb-6 md:pb-8 lg:pb-10 pr-4 md:pr-12 lg:pr-16">
								<p class="text-[#666] text-base md:text-lg lg:text-[20px] font-normal leading-relaxed">
									{{ faq.answer }}
								</p>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</div>
	</section>
</template>