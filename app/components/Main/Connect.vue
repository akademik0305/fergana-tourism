<!-- components/ConnectAppSection.vue -->
<template>
  <section class="bg-gray-50 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Title -->
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900">
            Connect with our app
          </h2>

          <!-- Features List -->
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg text-gray-700">Connect easily with players nearby</p>
            </div>

            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg text-gray-700">Book courts and find matches instantly</p>
            </div>

            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <p class="text-lg text-gray-700">Track your progress and view match stats</p>
            </div>
          </div>

          <!-- Download Button -->
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg hover:shadow-xl">
            DOWNLOAD THE APP
          </button>
        </div>

        <!-- Right Image with Phone Mockups -->
        <div class="relative">
          <!-- Main Image -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="" 
              alt="Tennis players" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Phone Mockup 1 - Search -->
          <div class="absolute top-8 -left-8 lg:-left-16 bg-white rounded-2xl shadow-2xl p-4 w-64 z-10">
            <div class="flex items-center justify-between mb-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span class="font-semibold text-gray-900">Search</span>
              <span class="text-blue-600 text-sm font-semibold">View list</span>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-2 mb-3">
              <input 
                type="text" 
                placeholder="Found me" 
                class="w-full bg-transparent outline-none text-sm text-gray-600"
              />
            </div>

            <div class="flex gap-2">
              <button class="flex-1 bg-blue-600 text-white text-xs py-2 rounded-lg font-semibold">
                All
              </button>
              <button class="flex-1 bg-gray-100 text-gray-600 text-xs py-2 rounded-lg font-semibold">
                Players searching
              </button>
            </div>
          </div>

          <!-- Phone Mockup 2 - Add Players -->
          <div class="absolute bottom-8 -right-8 lg:-right-16 bg-white rounded-2xl shadow-2xl p-4 w-72 z-10">
            <div class="mb-4">
              <h3 class="font-bold text-gray-900 mb-3">Add Players</h3>
              <div class="flex gap-3">
                <div class="flex flex-col items-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-1"></div>
                  <span class="text-xs text-gray-600">Kamil</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-1"></div>
                  <span class="text-xs text-gray-600">Kamil</span>
                </div>
                <div class="flex flex-col items-center">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mb-1"></div>
                  <span class="text-xs text-gray-600">Kamil...</span>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <div class="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span class="text-xs text-gray-600"></span>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search name, email or phone number" 
                class="flex-1 bg-transparent outline-none text-xs text-gray-600"
              />
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600 rounded-full -z-10 opacity-20"></div>
          <div class="absolute -top-8 -right-8 w-24 h-24 bg-lime-400 rounded-full -z-10 opacity-30"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>