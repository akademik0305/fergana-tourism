<!-- components/TopClubsSection.vue -->
<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl lg:text-5xl font-bold text-gray-900">
          Top searched clubs
        </h2>
        <button class="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Clubs Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ClubCard 
          v-for="club in clubs" 
          :key="club.id"
          :club="club"
          @book="handleBooking"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Club {
  id: number
  name: string
  image: string
  distance: number
  city: string
  price: number
  rating: number
  reviews: number
  availableTimes: string[]
}

const clubs = ref<Club[]>([
  {
    id: 1,
    name: 'Toshkent tennis club',
    image: '/api/placeholder/400/300',
    distance: 1000,
    city: 'Tashkent city',
    price: 200000,
    rating: 4.2,
    reviews: 124,
    availableTimes: ['5:30PM', '7:30PM', '5:30PM', '5:30PM']
  },
  {
    id: 2,
    name: 'Toshkent tennis club',
    image: '/api/placeholder/400/300',
    distance: 1000,
    city: 'Tashkent city',
    price: 200000,
    rating: 4.2,
    reviews: 124,
    availableTimes: ['5:30PM', '7:30PM', '5:30PM', '5:30PM']
  },
  {
    id: 3,
    name: 'Toshkent tennis club',
    image: '/api/placeholder/400/300',
    distance: 1000,
    city: 'Tashkent city',
    price: 200000,
    rating: 4.2,
    reviews: 124,
    availableTimes: ['5:30PM', '7:30PM', '5:30PM', '5:30PM']
  }
])

const handleBooking = (clubId: number) => {
  console.log('Booking club:', clubId)
  // Bu yerda booking logic yozasiz
}
</script>