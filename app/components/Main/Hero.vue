<!-- components/HeroSection.vue -->
<template>
	<section
		class="bg-main relative overflow-hidden bg-cover pt-40"
		style="
			background-image: url(~/assets/images/svg/header-line.svg;);
		"
	>
		<div class="max-w-7xl mx-auto px-4 relative">
			<div class="grid lg:grid-cols-2 gap-15 items-center">
				<!-- Left Content -->
				<div class="text-white space-y-6">
					<h1 class="text-[54px] font-bold leading-tight">
						Discover <span class="text-lime-400">Courts</span><br />
						& <span class="text-lime-400">Players</span> Around You
					</h1>

					<p class="text-2xl leading-tight text-white">
						Find Matches And Courts Worldwide,<br />
						Connect Anytime, Anywhere
					</p>

					<!-- Search Bar -->
					<div
						class="bg-white rounded-full p-2 flex items-center gap-3 shadow-lg max-w-md"
					>
						<UIcon name="ic:round-search" class="text-gray text-2xl" />
						<input
							type="text"
							placeholder="Address,Club,Place"
							class="flex-1 outline-none text-gray bg-transparent"
						/>
					</div>

					<!-- App Store Buttons -->
					<div class="flex gap-6 mt-10">
						<a href="#" class="inline-block">
							<img
								src="~/assets/images/png/play.png"
								alt="Get it on Google Play"
								class="h-12 rounded-lg"
							/>
						</a>

						<a href="#" class="inline-block">
							<img
								src="~/assets/images/png/app.png"
								alt="Get it on Google Play"
								class="h-12 rounded-lg"
							/>
						</a>
					</div>
				</div>

				<!-- Right Content - Mobile Mockup -->
				<div class="relative lg:block">
					<div class="relative mx-auto w-100">
					<img src="~/assets/images/png/header.png" alt="phone">
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
