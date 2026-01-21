<!-- components/AboutSection.vue -->
<template>
	<section class="bg-gradient-to-br from-yellow-50 to-green-50 py-16 lg:py-24">
		<div class="max-w-7xl mx-auto px-4">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Content -->
				<div class="space-y-8">
					<!-- Title Section -->
					<div>
						<h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
							What is the Playstat?
						</h2>
						<p class="text-gray-700 text-lg">
							Playstat is Uzbekistan's leading platform for racket sport players
							and clubs.
						</p>
					</div>

					<!-- We help you Section -->
					<div>
						<h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
							We help you
						</h3>

						<div class="space-y-4">
							<!-- Feature 1 -->
							<div class="flex gap-4 items-start">
								<div class="flex-shrink-0">
									<div
										class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
								</div>
								<div>
									<p class="text-gray-700 leading-relaxed">
										Find courts, book games, connect with other players, and
										focus on what truly matters — enjoy
									</p>
								</div>
							</div>

							<!-- Feature 2 -->
							<div class="flex gap-4 items-start">
								<div class="flex-shrink-0">
									<div
										class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center"
									>
										<svg
											class="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
											/>
										</svg>
									</div>
								</div>
								<div>
									<p class="text-gray-700 leading-relaxed">
										More than just an app, it's a growing community built around
										the love of sport.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Image -->
				<div class="relative">
					<div
						class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-600"
					>
						<img
							src="/api/placeholder/600/700"
							alt="Tennis player"
							class="w-full h-full object-cover"
						/>
						<!-- Overlay gradient for better text visibility if needed -->
						<div
							class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"
						></div>
					</div>

					<!-- Decorative element -->
					<div
						class="absolute -bottom-6 -right-6 w-32 h-32 bg-lime-400 rounded-full -z-10 opacity-50"
					></div>
					<div
						class="absolute -top-6 -left-6 w-24 h-24 bg-blue-600 rounded-full -z-10 opacity-30"
					></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
