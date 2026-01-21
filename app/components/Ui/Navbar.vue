<!-- components/Navbar.vue -->
<template>
  <nav class="bg-blue-600 px-4 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span class="text-white font-semibold text-xl">playstat</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-white hover:text-lime-400 transition-colors">For Players</a>
        <a href="#" class="text-white hover:text-lime-400 transition-colors">For Clubs</a>
        <a href="#" class="text-white hover:text-lime-400 transition-colors">FAQ / Testimonial</a>
        
        <!-- Language Selector -->
        <div class="relative">
          <button 
            @click="toggleLanguage"
            class="flex items-center gap-1 text-white hover:text-lime-400 transition-colors"
          >
            <span>{{ currentLanguage }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-if="languageOpen" class="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg py-2 z-10">
            <button 
              v-for="lang in languages" 
              :key="lang"
              @click="selectLanguage(lang)"
              class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {{ lang }}
            </button>
          </div>
        </div>

        <!-- Booking Button -->
        <button class="bg-lime-400 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-lime-300 transition-colors">
          Booking
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu"
        class="md:hidden text-white"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4">
      <div class="flex flex-col gap-4">
        <a href="#" class="text-white hover:text-lime-400 transition-colors">For Players</a>
        <a href="#" class="text-white hover:text-lime-400 transition-colors">For Clubs</a>
        <a href="#" class="text-white hover:text-lime-400 transition-colors">FAQ / Testimonial</a>
        <button class="bg-lime-400 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-lime-300 transition-colors w-full">
          Booking
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLanguage = ref('EN')
const languageOpen = ref(false)
const mobileMenuOpen = ref(false)
const languages = ['EN', 'UZ', 'RU']

const toggleLanguage = () => {
  languageOpen.value = !languageOpen.value
}

const selectLanguage = (lang: string) => {
  currentLanguage.value = lang
  languageOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>