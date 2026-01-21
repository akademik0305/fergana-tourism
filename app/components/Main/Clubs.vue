<!-- components/ClubsSection.vue -->
<template>
  <section class="bg-gray-50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Image -->
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="" 
              alt="Club manager" 
              class="w-full h-full object-cover"
            />
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full -z-10 opacity-20"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-lime-400 rounded-full -z-10 opacity-30"></div>
        </div>

        <!-- Right Content -->
        <div class="space-y-8">
          <!-- Title -->
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900">
            Playstat for clubs
          </h2>

          <!-- Features List -->
          <div class="space-y-4">
            <p class="text-lg text-gray-700">
              Connect easily with players nearby
            </p>

            <p class="text-lg text-gray-700">
              Book courts and find matches instantly
            </p>

            <p class="text-lg text-gray-700">
              Track your progress and view match stats
            </p>
          </div>

          <!-- Button -->
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg hover:shadow-xl">
            DISCOVER PLAYSTAT MANAGER
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>