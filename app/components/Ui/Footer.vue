<!-- components/Footer.vue -->
<template>
	<footer class="bg-yellow border-t border-gray-200 py-8 md:py-10 lg:py-13">
		<!-- Main Footer Content -->
		<div class="container px-4">
			<div
				class="flex flex-col lg:flex-row items-center gap-6 md:gap-8 justify-between"
			>
				<!-- Logo -->
				<NuxtLink to="/" class="flex items-center gap-2 shrink-0">
					<img
						src="~/assets/images/logo/logo-footer.svg"
						alt="Playstat logo"
						class="h-8 md:h-10 lg:h-12 w-auto"
					/>
				</NuxtLink>

				<!-- Links -->
				<nav
					class="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full lg:w-auto"
				>
					<NuxtLink
						to="#download"
						class="text-black hover:text-main transition-colors font-medium leading-normal text-sm md:text-base whitespace-nowrap hover:underline underline-offset-4 decoration-2"
					>
						Download our app
					</NuxtLink>
					<NuxtLink
						to="#about"
						class="text-black hover:text-main transition-colors font-medium leading-normal text-sm md:text-base whitespace-nowrap hover:underline underline-offset-4 decoration-2"
					>
						About
					</NuxtLink>
					<NuxtLink
						to="#legal"
						class="text-black hover:text-main transition-colors font-medium leading-normal text-sm md:text-base whitespace-nowrap hover:underline underline-offset-4 decoration-2"
					>
						Legal conditions
					</NuxtLink>
					<NuxtLink
						to="#privacy"
						class="text-black hover:text-main transition-colors font-medium leading-normal text-sm md:text-base whitespace-nowrap hover:underline underline-offset-4 decoration-2"
					>
						Privacy policy
					</NuxtLink>
				</nav>

				<!-- App Store Buttons -->
				<div class="flex gap-3 md:gap-4 justify-center lg:justify-end shrink-0">
					<a
						href="https://play.google.com"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block w-28 md:w-32 lg:w-36 hover:scale-105 transition-transform duration-200 active:scale-95"
					>
						<img
							src="~/assets/images/png/play.png"
							alt="Get it on Google Play"
							class="w-full h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow"
						/>
					</a>

					<a
						href="https://apps.apple.com"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block w-28 md:w-32 lg:w-36 hover:scale-105 transition-transform duration-200 active:scale-95"
					>
						<img
							src="~/assets/images/png/app.png"
							alt="Download on App Store"
							class="w-full h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow"
						/>
					</a>
				</div>
			</div>

			<!-- Copyright -->
			<p
				class="mt-8 md:mt-12 lg:mt-18 text-xs md:text-sm text-text text-center"
			>
				© 2025 Playstat. All rights reserved.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>
