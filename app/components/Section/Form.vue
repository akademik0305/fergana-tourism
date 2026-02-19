<script setup lang="ts">
import { LOCATIONS } from '~/constants'

// State (Reactdagi useState muqobili)
const submitted = ref(false)
const formData = reactive({
  name: '',
  phone: '',
  location: 'Barcha hududlar (Umumiy klaster)',
  description: ''
})

const handleSubmit = () => {
  // Bu yerda API so'rovini amalga oshirish mumkin
  console.log('Ma\'lumotlar:', formData)
  submitted.value = true
}
</script>

<template>
  <div>
    <section v-if="submitted" id="apply" class="py-32 bg-emerald-900 text-white">
      <div class="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div class="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-8 animate-bounce">
          <UIcon name="i-heroicons-check-circle" class="w-12 h-12" />
        </div>
        <h2 class="text-4xl font-bold mb-4 tracking-tighter">Arizangiz Direksiyaga Yuborildi!</h2>
        <p class="text-emerald-100/60 text-lg max-w-md mx-auto mb-10">
          Mutaxassislarimiz loyihangizni PQ-5 doirasida o'rganib chiqib, tez orada siz bilan bog'lanishadi.
        </p>
        <button 
          @click="submitted = false"
          class="bg-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all"
        >
          Yana ariza qoldirish
        </button>
      </div>
    </section>

    <section v-else id="apply" class="py-24 bg-slate-900">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:grid lg:grid-cols-2 gap-20 items-start">
          
          <div class="text-white">
            <h2 class="text-4xl font-bold mb-8 tracking-tighter">Investitsiya Loyihasini <br /> Taqdim Qiling</h2>
            <p class="text-emerald-100/60 mb-12 text-lg leading-relaxed">
              PQ-5 qarori doirasida yer uchastkalari Master-reja asosida <span class="text-white font-bold">E-auksion</span> orqali beriladi. Ariza qoldiring va Direksiya mutaxassislari sizga auksion shartlari hamda loyiha hujjatlarini tayyorlashda yordam beradi.
            </p>
            
            <div class="space-y-8">
              <div class="flex items-center gap-5">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <UIcon name="i-heroicons-phone" class="w-6 h-6" />
                </div>
                <div>
                   <p class="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Direksiya Ishonch Telefoni</p>
                   <p class="text-xl font-bold">+998 (73) 244-01-XX</p>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
                </div>
                <div>
                   <p class="text-xs text-emerald-500 font-bold uppercase tracking-widest mb-1">Elektron Pochta</p>
                   <p class="text-xl font-bold">invest@fergana-tourism.uz</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="w-full bg-white rounded-[40px] p-10 lg:p-14 shadow-2xl relative">
            <div class="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black text-2xl -rotate-12 shadow-xl">
              PQ-5
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Tashkilot yoki F.I.SH</label>
                <input v-model="formData.name" required type="text" placeholder="Silk Road Investors Ltd." class="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium" />
              </div>
              
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Aloqa uchun raqam</label>
                <input v-model="formData.phone" required type="tel" placeholder="+998 90 --- -- --" class="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium" />
              </div>
              
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Maqsadli Hudud</label>
                <select v-model="formData.location" class="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-bold">
                  <option v-for="l in LOCATIONS" :key="l.id" :value="l.name">{{ l.name }} Hududi</option>
                  <option value="Barcha hududlar (Umumiy klaster)">Barcha hududlar (Umumiy klaster)</option>
                </select>
              </div>
              
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Loyiha Tavsifi</label>
                <textarea v-model="formData.description" required placeholder="Mo'ljallangan investitsiya miqdori va loyiha turi..." rows="4" class="w-full p-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 font-medium resize-none"></textarea>
              </div>
              
              <button class="w-full bg-emerald-600 text-white font-black py-6 rounded-2xl shadow-xl shadow-emerald-200 uppercase tracking-[0.2em] text-xs hover:bg-emerald-700 transition active:scale-95 flex items-center justify-center gap-3">
                <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
                Arizani Direksiyaga Yuborish
              </button>
              
              <p class="text-center text-[10px] text-slate-400 italic">
                Arizangiz Direksiya tomonidan ko'rib chiqilib, Master-rejadagi mos lotlar taklif qilinadi.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>