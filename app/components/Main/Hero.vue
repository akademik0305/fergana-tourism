<!-- components/HeroSection.vue -->
<template>
	<section class="bg-blue-600 relative overflow-hidden">
		<!-- Decorative Background Circles -->
		<div class="absolute inset-0 overflow-hidden opacity-20">
			<div
				class="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
			></div>
			<div
				class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
			></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Content -->
				<div class="text-white space-y-6">
					<h1 class="text-4xl lg:text-6xl font-bold leading-tight">
						Discover <span class="text-lime-400">Courts</span><br />
						& <span class="text-lime-400">Players</span> Around You
					</h1>

					<p class="text-lg lg:text-xl text-blue-100">
						Find Matches And Courts Worldwide,<br />
						Connect Anytime, Anywhere
					</p>

					<!-- Search Bar -->
					<div
						class="bg-white rounded-full p-2 flex items-center gap-3 shadow-lg max-w-md"
					>
						<svg
							class="w-6 h-6 text-gray-400 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							type="text"
							placeholder="Address,Club,Place"
							class="flex-1 outline-none text-gray-700 bg-transparent"
						/>
					</div>

					<!-- App Store Buttons -->
					<div class="flex gap-4 pt-4">
						<a href="#" class="inline-block">
							<img
								src=""
								alt="Get it on Google Play"
								class="h-12 bg-black rounded-lg"
							/>
							<div
								class="bg-black rounded-lg px-4 py-2 flex items-center gap-3"
							>
								<svg
									class="w-6 h-6 text-white"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
									/>
								</svg>
								<div>
									<div class="text-xs text-gray-400">GET IT ON</div>
									<div class="text-sm font-semibold text-white">
										Google Play
									</div>
								</div>
							</div>
						</a>

						<a href="#" class="inline-block">
							<div
								class="bg-black rounded-lg px-4 py-2 flex items-center gap-3"
							>
								<svg
									class="w-6 h-6 text-white"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
									/>
								</svg>
								<div>
									<div class="text-xs text-gray-400">Download on the</div>
									<div class="text-sm font-semibold text-white">App Store</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				<!-- Right Content - Mobile Mockup -->
				<div class="relative lg:block">
					<div class="relative mx-auto w-80 h-[600px]">
						<!-- Phone Frame -->
						<div
							class="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800"
						>
							<!-- Status Bar -->
							<div
								class="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"
							></div>

							<!-- Phone Screen Content -->
							<div class="h-full bg-blue-600 pt-8 px-4">
								<!-- App Header -->
								<div class="flex items-center justify-between mb-4">
									<div class="flex items-center gap-2">
										<div class="w-6 h-6 bg-lime-400 rounded-full"></div>
										<span class="text-white font-semibold">playstat</span>
									</div>
									<div class="flex gap-3">
										<svg
											class="w-5 h-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
											/>
										</svg>
										<svg
											class="w-5 h-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</div>
								</div>

								<!-- Search Bar -->
								<div class="bg-white rounded-xl p-3 mb-4">
									<input
										type="text"
										placeholder="Find court, match, friend"
										class="w-full outline-none text-sm text-gray-600"
									/>
								</div>

								<!-- Location Text -->
								<h2 class="text-white font-semibold text-lg mb-3">
									Let's go Moxizoda
								</h2>

								<!-- Action Buttons Grid -->
								<div class="grid grid-cols-2 gap-3 mb-4">
									<button
										class="bg-blue-700 text-white rounded-xl p-4 text-left"
									>
										<div class="w-8 h-8 bg-lime-400 rounded-full mb-2"></div>
										<div class="text-xs font-semibold">Booking court</div>
									</button>
									<button
										class="bg-blue-700 text-white rounded-xl p-4 text-left"
									>
										<div class="w-8 h-8 bg-lime-400 rounded-full mb-2"></div>
										<div class="text-xs font-semibold">Learn (Classes)</div>
									</button>
									<button
										class="bg-blue-700 text-white rounded-xl p-4 text-left"
									>
										<div class="w-8 h-8 bg-lime-400 rounded-full mb-2"></div>
										<div class="text-xs font-semibold">Find Matches</div>
									</button>
									<button
										class="bg-blue-700 text-white rounded-xl p-4 text-left"
									>
										<div class="w-8 h-8 bg-lime-400 rounded-full mb-2"></div>
										<div class="text-xs font-semibold">Tournaments</div>
									</button>
								</div>

								<!-- Suggested Courts -->
								<div class="flex justify-between items-center mb-3">
									<h3 class="text-white font-semibold">Suggested courts</h3>
									<a href="#" class="text-lime-400 text-xs">See all</a>
								</div>

								<!-- Court Card -->
								<div class="bg-white rounded-xl overflow-hidden">
									<div class="h-32 bg-blue-400"></div>
									<div class="p-3">
										<h4 class="font-semibold text-sm">Toshkent tennis club</h4>
										<p class="text-xs text-gray-500">1000 km-Tashkent city</p>
										<div class="flex items-center gap-1 mt-1">
											<span class="text-yellow-400 text-xs">★★★★</span>
											<span class="text-xs text-gray-500">4.2 (04 shart)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
