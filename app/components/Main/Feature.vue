<!-- components/FeaturesSection.vue -->
<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          You need to start playing
        </h2>
        <p class="text-gray-600 text-lg">
          Everything you need to find courts, book games,<br />
          and start playing — all in one place.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-12 lg:gap-16">
        <!-- Feature 1: Easy to Search -->
        <div class="flex flex-col items-center text-center">
          <!-- Icon with connecting line -->
          <div class="relative mb-8">
            <!-- Icon -->
            <div class="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center relative z-10">
              <svg class="w-10 h-10 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <!-- Connecting Line (hidden on mobile, visible on md+) -->
            <div class="hidden md:block absolute top-10 left-20 w-32 lg:w-48">
              <svg class="w-full h-8" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20 Q 50 5, 100 20 T 200 20" stroke="#E5E7EB" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            EASY TO SEARCH
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Easily find courts and players around you in just seconds and start playing right away.
          </p>
        </div>

        <!-- Feature 2: Booking -->
        <div class="flex flex-col items-center text-center">
          <div class="relative mb-8">
            <!-- Icon -->
            <div class="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center relative z-10">
              <svg class="w-10 h-10 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Connecting Line -->
            <div class="hidden md:block absolute top-10 left-20 w-32 lg:w-48">
              <svg class="w-full h-8" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 20 Q 50 35, 100 20 T 200 20" stroke="#E5E7EB" stroke-width="2" fill="none"/>
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            BOOKING
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Book your court in seconds with a simple and smooth flow made for hassle-free playing.
          </p>
        </div>

        <!-- Feature 3: Fast Payments -->
        <div class="flex flex-col items-center text-center">
          <div class="relative mb-8">
            <!-- Icon -->
            <div class="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center relative z-10">
              <svg class="w-10 h-10 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 mb-3">
            FAST PAYMENTS
          </h3>
          <p class="text-gray-600 leading-relaxed">
            Pay quickly and securely with trusted payment methods designed for smooth checkout.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>