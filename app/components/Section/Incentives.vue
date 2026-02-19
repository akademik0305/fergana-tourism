<script setup lang="ts">
import { INCENTIVES } from '~/constants'
</script>

<template>
  <section id="benefits" class="py-24 bg-slate-50">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h2 class="text-4xl font-bold mb-6 text-slate-900 leading-tight">
            Qarorning Huquqiy va <br /> Iqtisodiy Asoslari
          </h2>
          <p class="text-slate-600 mb-10 text-lg">
            PQ-5 qarori shunchaki hujjat emas, bu investor uchun davlat tomonidan berilgan 
            <span class="text-emerald-600 font-bold italic underline">3 ta asosiy kafolatdir:</span>
          </p>
          
          <div class="space-y-6">
            <div 
              v-for="(item, idx) in INCENTIVES" 
              :key="idx" 
              class="feature-card p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-3 mb-2">
                <span class="text-emerald-600 font-black text-xl italic underline">0{{ idx + 1 }}.</span>
                <h4 class="font-bold text-emerald-900 text-xl">{{ item.title }}</h4>
                <UIcon :name="item.icon" class="w-6 h-6 text-emerald-600 ml-auto" />
              </div>
              <p class="text-slate-500 leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-emerald-900 rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px]"></div>
          
          <h3 class="text-3xl font-bold mb-8 flex items-center gap-3">
            <span class="w-8 h-1 bg-emerald-400 rounded-full"></span>
            Investorlar uchun Soliq Imtiyozlari
          </h3>

          <ul class="space-y-8 text-emerald-100/80">
            <li class="flex items-center gap-6 border-b border-emerald-800 pb-6">
              <span class="text-5xl font-black text-emerald-400">0%</span>
              <div class="text-sm">
                <span class="block font-bold text-white text-base">Bojxona to'lovlari</span>
                Uskunalar va butlovchi buyumlar uchun
              </div>
            </li>

            <li class="flex items-center gap-6 border-b border-emerald-800 pb-6">
              <span class="text-5xl font-black text-emerald-400">50%</span>
              <div class="text-sm">
                <span class="block font-bold text-white text-base">Foyda solig'i</span>
                Stavkaning pasaytirilishi (muayyan shartlarda)
              </div>
            </li>

            <li class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <UIcon name="i-heroicons-banknotes" class="w-8 h-8" />
              </div>
              <div class="text-sm">
                <span class="block font-bold text-white text-base">10 Yillik Muddat</span>
                Yer qiymatini bo'lib-bo'lib to'lash imkoniyati
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>