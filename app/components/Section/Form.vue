<script setup lang="ts">
import { LOCATIONS } from '~/constants'

const submitted = ref(false)
const formData = reactive({
  name: '',
  phone: '',
  location: 'Barcha hududlar (Umumiy klaster)',
  description: ''
})

const handleSubmit = () => {
  console.log('Ma\'lumotlar:', formData)
  submitted.value = true
}
</script>

<template>
  <div>
    <!-- Success -->
    <section v-if="submitted" id="apply" class="py-24 sm:py-32 bg-emerald-900 text-white">
      <div class="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div class="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 animate-bounce">
          <UIcon name="i-heroicons-check-circle" class="w-10 h-10 sm:w-12 sm:h-12" />
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold mb-4 tracking-tighter">
          {{ $t('apply.success.title') }}
        </h2>
        <p class="text-emerald-100/60 text-base sm:text-lg max-w-md mx-auto mb-10">
          {{ $t('apply.success.desc') }}
        </p>
        <button
          @click="submitted = false"
          class="bg-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all"
        >
          {{ $t('apply.success.again') }}
        </button>
      </div>
    </section>

    <!-- Form -->
    <section v-else id="apply" class="py-16 sm:py-24 bg-slate-900">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <!-- Left info -->
          <div class="text-white">
            <h2 class="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 tracking-tighter">
              {{ $t('apply.title') }}
            </h2>
            <p class="text-emerald-100/60 mb-10 sm:mb-12 text-base sm:text-lg leading-relaxed" v-html="$t('apply.desc')" />

            <div class="space-y-6 sm:space-y-8">
              <div class="flex items-center gap-4 sm:gap-5">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                  <UIcon name="i-heroicons-phone" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">
                    {{ $t('apply.phone.label') }}
                  </p>
                  <p class="text-lg sm:text-xl font-bold">+998 (73) 244-01-XX</p>
                </div>
              </div>
              <div class="flex items-center gap-4 sm:gap-5">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">
                    {{ $t('apply.email.label') }}
                  </p>
                  <p class="text-lg sm:text-xl font-bold">invest@fergana-tourism.uz</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right form -->
          <div class="w-full bg-white rounded-[2.5rem] sm:rounded-[40px] p-8 sm:p-10 lg:p-14 shadow-2xl relative">
            <div class="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black text-lg sm:text-2xl -rotate-12 shadow-xl">
              PQ-5
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
              <div class="space-y-2">
                <label class="text-tiny font-bold text-slate-400 uppercase tracking-widest px-1">
                  {{ $t('apply.form.name.label') }}
                </label>
                <input
                  v-model="formData.name"
                  required
                  type="text"
                  :placeholder="$t('apply.form.name.placeholder')"
                  class="w-full p-4 sm:p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium"
                />
              </div>

              <div class="space-y-2">
                <label class="text-tiny font-bold text-slate-400 uppercase tracking-widest px-1">
                  {{ $t('apply.form.phone.label') }}
                </label>
                <input
                  v-model="formData.phone"
                  required
                  type="tel"
                  :placeholder="$t('apply.form.phone.placeholder')"
                  class="w-full p-4 sm:p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium"
                />
              </div>

              <div class="space-y-2">
                <label class="text-tiny font-bold text-slate-400 uppercase tracking-widest px-1">
                  {{ $t('apply.form.location.label') }}
                </label>
                <select
                  v-model="formData.location"
                  class="w-full p-4 sm:p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-bold"
                >
                  <option v-for="l in LOCATIONS" :key="l.id" :value="l.id">
                    {{ $t(l.nameKey) }} {{ $t('apply.form.location.suffix') }}
                  </option>
                  <option value="all">{{ $t('apply.form.location.all') }}</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-tiny font-bold text-slate-400 uppercase tracking-widest px-1">
                  {{ $t('apply.form.description.label') }}
                </label>
                <textarea
                  v-model="formData.description"
                  required
                  :placeholder="$t('apply.form.description.placeholder')"
                  rows="4"
                  class="w-full p-4 sm:p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium resize-none"
                />
              </div>

              <button class="w-full bg-emerald-600 text-white font-black py-4 sm:py-6 px-4 rounded-2xl shadow-xl shadow-emerald-200 uppercase tracking-[0.2em] text-xs hover:bg-emerald-700 transition active:scale-95 flex items-center justify-center gap-3">
                <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
                {{ $t('apply.form.submit') }}
              </button>

              <p class="text-center text-tiny text-slate-400 italic">
                {{ $t('apply.form.note') }}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>