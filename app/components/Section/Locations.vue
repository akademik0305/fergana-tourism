<script setup lang="ts">
import { LOCATIONS } from '~/constants'
</script>

<template>
  <section id="locations" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center mb-20">
      <h2 class="text-5xl font-extrabold mb-4 tracking-tighter text-slate-900 uppercase">
        Strategik Hududlar Klasteri
      </h2>
      <div class="w-24 h-2 bg-emerald-600 mx-auto rounded-full"></div>
      <p class="text-slate-500 mt-6 max-w-2xl mx-auto italic">
        PQ-5 qarori bilan belgilangan ushbu 5 ta hudud Master-reja asosida rivojlantiriladi.
      </p>
    </div>

    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
        <div 
          v-for="loc in LOCATIONS" 
          :key="loc.id" 
          class="group relative overflow-hidden h-[550px] rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500"
        >
          <img 
            :src="loc.image" 
            :alt="loc.name" 
            class="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
          />

          <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent p-10 flex flex-col justify-end">
            <h3 class="text-white text-2xl font-bold mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">
              <template v-if="loc.name === 'Yordon'">
                <span class="underline italic decoration-emerald-500/50">Yordon</span>
              </template>
              <template v-else>
                {{ loc.name }}
              </template>
            </h3>

            <p class="text-emerald-50/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
              {{ loc.description }}
            </p>

            <div class="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                {{ loc.sqm }} Gektar
              </span>
              <button class="text-white font-bold text-xs uppercase tracking-tighter hover:underline">
                Tanlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hover effektlarini yanada silliq qilish uchun qo'shimcha CSS (ixtiyoriy) */
.group:hover .group-hover\:translate-y-0 {
  transition-delay: 100ms;
}
</style>