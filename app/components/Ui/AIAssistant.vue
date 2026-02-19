<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Reaktiv holatlar
const isOpen = ref(false)
const input = ref('')
const isLoading = ref(false)
const chatEndRef = ref<HTMLElement | null>(null)

const messages = ref<ChatMessage[]>([
  { 
    role: 'model', 
    text: "Assalomu alaykum! Men Farg'ona investitsiya maslahatchisiman. PQ-5 qarori yoki turistik zona bo'yicha qanday savollaringiz bor?" 
  }
])

// Xabarlar qo'shilganda avtomatik pastga tushish
const scrollToBottom = async () => {
  await nextTick()
  if (chatEndRef.value) {
    chatEndRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

// Xabar yuborish funksiyasi
const handleSend = async () => {
  if (!input.value.trim() || isLoading.value) return

  const userMsg = input.value
  input.value = ''
  messages.value.push({ role: 'user', text: userMsg })
  isLoading.value = true
  await scrollToBottom()

  try {
    // Nuxt server route'ga so'rov yuborish
    const data = await $fetch('/api/gemini', {
      method: 'POST',
      body: { prompt: userMsg }
    })

    messages.value.push({ role: 'model', text: data.text })
  } catch (error) {
    messages.value.push({ 
      role: 'model', 
      text: "Kechirasiz, xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring." 
    })
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

// Escape tugmasi orqali yopish
const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))
</script>

<template>
  <div class="fixed bottom-8 right-8 z-[100]">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
    >
      <button 
        v-if="!isOpen"
        @click="isOpen = true"
        class="bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-600/50 hover:scale-110 transition-all group flex items-center gap-2"
      >
        <UIcon name="i-heroicons-chat-bubble-left-right" class="w-8 h-8" />
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          AI Maslahatchi
        </span>
      </button>
    </Transition>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-10 opacity-0"
    >
      <div v-if="isOpen" class="w-[350px] md:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200">
        <div class="p-6 bg-emerald-600 text-white flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-white/20 rounded-xl">
              <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6" />
            </div>
            <div class="text-left">
              <h4 class="font-bold leading-tight">AI Maslahatchi</h4>
              <div class="flex items-center gap-1.5 text-[10px] text-emerald-200 uppercase font-bold tracking-widest">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse"></span>
                Onlayn
              </div>
            </div>
          </div>
          <button @click="isOpen = false" class="hover:bg-white/10 p-1 rounded-lg transition-colors">
            <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          <div v-for="(m, i) in messages" :key="i" :class="['flex', m.role === 'user' ? 'justify-end' : 'justify-start']">
            <div :class="['flex gap-2 max-w-[85%]', m.role === 'user' ? 'flex-row-reverse' : 'flex-row']">
              <div :class="['w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', m.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-100 text-emerald-600']">
                <UIcon :name="m.role === 'user' ? 'i-heroicons-user' : 'i-heroicons-sparkles'" class="w-4 h-4" />
              </div>
              <div :class="['p-4 rounded-2xl text-sm leading-relaxed shadow-sm', m.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100']">
                {{ m.text }}
              </div>
            </div>
          </div>

          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
              <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 text-emerald-600 animate-spin" />
              <span class="text-slate-400 text-xs font-medium italic">Fikrlamoqda...</span>
            </div>
          </div>
          <div ref="chatEndRef" />
        </div>

        <div class="p-4 bg-white border-t border-slate-100 flex gap-2">
          <input 
            v-model="input"
            type="text" 
            @keydown.enter="handleSend"
            placeholder="Savolingizni yozing..." 
            class="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          />
          <button 
            @click="handleSend"
            :disabled="isLoading || !input.trim()"
            class="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Scrollbarni chiroyli qilish */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 10px;
}
</style>