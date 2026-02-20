<script setup lang="ts">
import { INCENTIVES } from '~/constants'
</script>

<template>
  <section id="benefits" class="py-16 sm:py-24 bg-slate-50">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- Left -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 leading-tight">
            {{ $t('benefits.title') }}
          </h2>
          <p class="text-slate-600 mb-10 text-base sm:text-lg">
            {{ $t('benefits.description') }}
            <span class="text-emerald-600 font-bold italic underline">
              {{ $t('benefits.highlight') }}
            </span>
          </p>

          <div class="space-y-4 sm:space-y-6">
            <div
              v-for="(item, idx) in INCENTIVES"
              :key="idx"
              class="feature-card p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-3 mb-2">
                <span class="text-emerald-600 font-black text-xl italic underline">0{{ idx + 1 }}.</span>
                <h4 class="font-bold text-emerald-900 text-base sm:text-xl">{{ $t(item.titleKey) }}</h4>
                <UIcon :name="item.icon" class="w-6 h-6 text-emerald-600 ml-auto shrink-0" />
              </div>
              <p class="text-slate-500 leading-relaxed text-sm sm:text-base">{{ $t(item.descriptionKey) }}</p>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="bg-emerald-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px]" />

          <h3 class="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
            <span class="w-8 h-1 bg-emerald-400 rounded-full shrink-0" />
            {{ $t('benefits.tax.title') }}
          </h3>

          <ul class="space-y-6 sm:space-y-8 text-emerald-100/80">
            <li class="flex items-center gap-4 sm:gap-6 border-b border-emerald-800 pb-6">
              <span class="text-4xl sm:text-5xl font-black text-emerald-400 shrink-0">
                {{ $t('benefits.tax.customs.value') }}
              </span>
              <div class="text-sm">
                <span class="block font-bold text-white text-sm sm:text-base">
                  {{ $t('benefits.tax.customs.label') }}
                </span>
                {{ $t('benefits.tax.customs.desc') }}
              </div>
            </li>

            <li class="flex items-center gap-4 sm:gap-6 border-b border-emerald-800 pb-6">
              <span class="text-4xl sm:text-5xl font-black text-emerald-400 shrink-0">
                {{ $t('benefits.tax.profit.value') }}
              </span>
              <div class="text-sm">
                <span class="block font-bold text-white text-sm sm:text-base">
                  {{ $t('benefits.tax.profit.label') }}
                </span>
                {{ $t('benefits.tax.profit.desc') }}
              </div>
            </li>

            <li class="flex items-center gap-4 sm:gap-6">
              <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
                <UIcon name="i-heroicons-banknotes" class="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div class="text-sm">
                <span class="block font-bold text-white text-sm sm:text-base">
                  {{ $t('benefits.tax.land.label') }}
                </span>
                {{ $t('benefits.tax.land.desc') }}
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>