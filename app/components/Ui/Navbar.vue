<script setup lang="ts">
const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { name: 'Qaror Mohiyati', href: '#benefits' },
  { name: '5 ta Hudud', href: '#locations' },
  { name: 'Statistika', href: '#stats' },
]
</script>

<template>
  <nav :class="['fixed w-full z-50 transition-all duration-300', scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-slate-100']">
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="bg-emerald-600 text-white px-3 py-1 rounded font-black text-xl">PQ-5</div>
        <div class="leading-none hidden sm:block text-left">
          <span class="text-[10px] font-bold text-slate-400 block tracking-[0.2em] uppercase">Prezident Qarori</span>
          <span class="text-lg font-extrabold text-emerald-900 tracking-tight uppercase">Farg'ona Tourism</span>
        </div>
      </div>

      <div class="hidden lg:flex items-center space-x-8">
        <NuxtLink v-for="link in navLinks" :key="link.name" :to="link.href" class="font-semibold text-slate-600 hover:text-emerald-600">
          {{ link.name }}
        </NuxtLink>
        <NuxtLink to="#apply" class="bg-emerald-600 text-white px-7 py-3 rounded-full font-bold text-sm">Investitsiya kiritish</NuxtLink>
      </div>

      <button @click="isOpen = !isOpen" class="lg:hidden text-slate-900">
        <UIcon :name="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-7 h-7" />
      </button>
    </div>
  </nav>
</template>