<script setup lang="ts">
// ApexCharts Nuxt-da faqat Client-side'da ishlashi kerak
const Chart = computed(() => {
	return defineAsyncComponent(() => import("vue3-apexcharts"))
})

const data = [
	{ name: "Mehmonxonalar", value: 45 },
	{ name: "Kabel Yo'llari", value: 12 },
	{ name: "Ekoturizm", value: 28 },
	{ name: "Ko'ngilochar", value: 15 },
]

const chartOptions = {
	chart: {
		type: "bar",
		toolbar: { show: false },
	},
	plotOptions: {
		bar: {
			borderRadius: 10,
			distributed: true, // Har bir ustun har xil rangda bo'lishi uchun
			columnWidth: "60%",
		},
	},
	colors: ["#10b981", "#059669", "#047857", "#065f46"],
	dataLabels: { enabled: false },
	legend: { show: false },
	xaxis: {
		categories: data.map(i => i.name),
		axisBorder: { show: false },
		axisTicks: { show: false },
		labels: {
			style: { colors: "#64748b", fontSize: "12px" },
		},
	},
	yaxis: { show: false },
	grid: {
		borderColor: "#e2e8f0",
		strokeDashArray: 4,
		yaxis: { lines: { show: true } },
		xaxis: { lines: { show: false } },
	},
	tooltip: {
		theme: "light",
		y: {
			formatter: (val: number) => `${val}%`,
		},
	},
}

const chartSeries = [
	{
		name: "Ulushi",
		data: data.map(i => i.value),
	},
]
</script>

<template>
	<section id="stats" class="py-32 bg-white">
		<div class="container mx-auto px-6">
			<div class="flex flex-col lg:flex-row gap-16 items-center">
				<div class="lg:w-1/2">
					<h2 class="text-emerald-600 font-bold uppercase tracking-widest mb-4">
						Prognozlar
					</h2>
					<h3
						class="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight"
					>
						Kutilayotgan Investitsiya
						<span class="text-emerald-500 underline decoration-slate-200"
							>Strukturasi</span
						>
					</h3>
					<p class="text-slate-600 text-lg leading-relaxed mb-8">
						Farg'ona turistik zonasi 2025-2027 yillar davomida jami $150
						milliondan ortiq to'g'ridan-to'g'ri investitsiyalarni jalb qilishni
						rejalashtirmoqda. Eng katta ulush turar-joy va rekreatsion
						maskanlariga to'g'ri keladi.
					</p>

					<div class="space-y-6">
						<div class="flex items-center gap-4">
							<div
								class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold"
							>
								01
							</div>
							<div>
								<h4 class="font-bold text-slate-900">40+ Yirik Loyiha</h4>
								<p class="text-sm text-slate-500">
									Tayyor master-planlar asosida.
								</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div
								class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold"
							>
								02
							</div>
							<div>
								<h4 class="font-bold text-slate-900">
									10,000+ Yangi Ish O'rni
								</h4>
								<p class="text-sm text-slate-500">
									Mahalliy aholi va mutaxassislar uchun.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div
					class="lg:w-1/2 w-full h-112.5 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shadow-xl"
				>
					<client-only>
						<component
							:is="Chart"
							type="bar"
							height="350"
							:options="chartOptions"
							:series="chartSeries"
						/>
					</client-only>
					<div
						class="mt-4 text-center text-xs text-slate-400 uppercase tracking-widest font-bold"
					>
						Loyiha Yo'nalishlari Bo'yicha Taqsimot (%)
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
