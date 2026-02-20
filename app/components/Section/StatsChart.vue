<script setup lang="ts">
const { t } = useI18n()

const Chart = computed(() => {
	return defineAsyncComponent(() => import("vue3-apexcharts"))
})

const data = [
	{ value: 45 },
	{ value: 12 },
	{ value: 28 },
	{ value: 15 },
]

const chartOptions = computed(() => ({
	chart: {
		type: "bar",
		toolbar: { show: false },
	},
	plotOptions: {
		bar: {
			borderRadius: 10,
			distributed: true,
			columnWidth: "60%",
		},
	},
	colors: ["#10b981", "#059669", "#047857", "#065f46"],
	dataLabels: { enabled: false },
	legend: { show: false },
	xaxis: {
		categories: [t('stats.categories[0]'), t('stats.categories[1]'), t('stats.categories[2]') ,t('stats.categories[3]')],
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
}))

const chartSeries = computed(() => [
	{
		name: t('stats.series'),
		data: data.map(i => i.value),
	},
])
</script>

<template>
	<section id="stats" class="py-16 sm:py-32 bg-white">
		<div class="container mx-auto px-6">
			<div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

				<!-- Left -->
				<div class="lg:w-1/2 w-full">
					<h2 class="text-emerald-600 font-bold uppercase tracking-widest mb-4 text-sm sm:text-base">
						{{ $t('stats.label') }}
					</h2>
					<h3 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight">
						{{ $t('stats.title') }}
						<span class="text-emerald-500 underline decoration-slate-200">
							{{ $t('stats.titleHighlight') }}
						</span>
					</h3>
					<p class="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
						{{ $t('stats.description') }}
					</p>

					<div class="space-y-5 sm:space-y-6">
						<div class="flex items-center gap-4">
							<div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
								01
							</div>
							<div>
								<h4 class="font-bold text-slate-900">{{ $t('stats.projects.label') }}</h4>
								<p class="text-sm text-slate-500">{{ $t('stats.projects.desc') }}</p>
							</div>
						</div>
						<div class="flex items-center gap-4">
							<div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">
								02
							</div>
							<div>
								<h4 class="font-bold text-slate-900">{{ $t('stats.jobs.label') }}</h4>
								<p class="text-sm text-slate-500">{{ $t('stats.jobs.desc') }}</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Right: Chart -->
				<div class="lg:w-1/2 w-full bg-slate-50 p-6 sm:p-8 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 shadow-xl">
					<client-only>
						<component
							:is="Chart"
							type="bar"
							height="350"
							:options="chartOptions"
							:series="chartSeries"
						/>
					</client-only>
					<div class="mt-4 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
						{{ $t('stats.chartFooter') }}
					</div>
				</div>

			</div>
		</div>
	</section>
</template>