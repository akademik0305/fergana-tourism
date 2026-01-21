<!-- components/ClubCard.vue -->
<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
    <!-- Club Image -->
    <div class="relative h-56 overflow-hidden">
      <img 
        :src="club.image" 
        :alt="club.name" 
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Club Info -->
    <div class="p-5 space-y-4">
      <!-- Title and Price -->
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1">
          <h3 class="font-bold text-gray-900 text-lg mb-1">
            {{ club.name }}
          </h3>
          <p class="text-sm text-gray-500">
            {{ club.distance }} km–{{ club.city }}
          </p>
        </div>
        <div class="flex items-center gap-1 text-blue-600 flex-shrink-0">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
          </svg>
          <span class="font-semibold">{{ club.price.toLocaleString() }} sum</span>
        </div>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <div class="flex">
          <svg 
            v-for="star in 5" 
            :key="star"
            class="w-4 h-4 fill-current"
            :class="star <= Math.floor(club.rating) ? 'text-yellow-400' : 'text-gray-300'"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-sm text-gray-600">
          {{ club.rating }} ({{ club.reviews }} sharh)
        </span>
      </div>

      <!-- Time Availability -->
      <div>
        <p class="text-sm font-semibold text-gray-700 mb-3">Time Availability</p>
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="(time, index) in club.availableTimes" 
            :key="index"
            class="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <!-- Book Now Button -->
      <button 
        @click="handleBooking"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        BOOK NOW
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface Props {
  club: Club
}

const props = defineProps<Props>()

const emit = defineEmits<{
  book: [clubId: number]
}>()

const handleBooking = () => {
  emit('book', props.club.id)
}
</script>