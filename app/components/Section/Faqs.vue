<script lang="ts" setup>
import { ref } from 'vue'
const { t } = useI18n()

interface FAQ {
	question: string
	answer: string
}

const faqs = computed<FAQ[]>(() => [
	{
		question: t('faq.q1.question'),
		answer: t('faq.q1.answer'),
	},
	{
		question: t('faq.q2.question'),
		answer: t('faq.q2.answer'),
	},
	{
		question: t('faq.q3.question'),
		answer: t('faq.q3.answer'),
	},
	{
		question: t('faq.q4.question'),
		answer: t('faq.q4.answer'),
	},
	{
		question: t('faq.q5.question'),
		answer: t('faq.q5.answer'),
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
					{{ $t('faq.title') }}
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