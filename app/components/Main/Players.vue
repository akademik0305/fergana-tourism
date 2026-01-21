<!-- components/PlayersSection.vue -->
<template>
	<section class="bg-blue-600 py-16 lg:py-24 relative overflow-hidden">
		<!-- Decorative Background -->
		<div class="absolute inset-0 overflow-hidden opacity-10">
			<div
				class="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
			></div>
			<div
				class="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
			></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 relative">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Image -->
				<div class="relative order-2 lg:order-1">
					<div class="relative rounded-3xl overflow-hidden shadow-2xl">
						<img
							src=""
							alt="Tennis court"
							class="w-full h-full object-cover"
						/>
					</div>

					<!-- Decorative elements -->
					<div
						class="absolute -bottom-6 -left-6 w-32 h-32 bg-lime-400 rounded-full -z-10 opacity-50"
					></div>
					<div
						class="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full -z-10 opacity-30"
					></div>
				</div>

				<!-- Right Content -->
				<div class="text-white space-y-8 order-1 lg:order-2">
					<!-- Title -->
					<div>
						<h2 class="text-3xl lg:text-5xl font-bold mb-4">
							Playstat for players
						</h2>
						<p class="text-lg text-blue-100">
							Playstat is Uzbekistan's leading platform for racket sport players
							and clubs.
						</p>
					</div>

					<!-- Features List -->
					<div class="space-y-6">
						<!-- Feature 1 -->
						<div class="flex gap-4 items-start border-b border-blue-500 pb-6">
							<div class="flex-shrink-0">
								<div
									class="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center"
								>
									<svg
										class="w-6 h-6 text-blue-600"
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
							<div class="flex-1">
								<p class="text-base leading-relaxed">
									Find courts, book games, connect with other players, and focus
									on what truly matters — enjoy
								</p>
							</div>
						</div>

						<!-- Feature 2 -->
						<div class="flex gap-4 items-start border-b border-blue-500 pb-6">
							<div class="flex-shrink-0">
								<div
									class="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center"
								>
									<svg
										class="w-6 h-6 text-blue-600"
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
							<div class="flex-1">
								<p class="text-base leading-relaxed">
									More than just an app, it's a growing community built around
									the love of sport.
								</p>
							</div>
						</div>

						<!-- Feature 3 -->
						<div class="flex gap-4 items-start">
							<div class="flex-shrink-0">
								<div
									class="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center"
								>
									<svg
										class="w-6 h-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								</div>
							</div>
							<div class="flex-1">
								<p class="text-base leading-relaxed">
									With friends or new people, play whenever you like and become
									part of Playtomic, the world's largest and ever-growing
									community of passionate racket sports players.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
