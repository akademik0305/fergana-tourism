<script setup lang="ts">
//===============================-< imports >-===============================
//> variables
const router = useRouter()
const { t, locale } = useI18n()
const localePath = useLocalePath()
//> functions
</script>

<template>
	<div class="min-h-screen">
		<SectionHero />
		<SectionLocations />
		<SectionIncentives />
		<SectionStatsChart />
		<SectionForm />
	</div>
</template>
