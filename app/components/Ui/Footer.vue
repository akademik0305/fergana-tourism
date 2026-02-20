<template>
  <footer class="bg-slate-900 text-white py-12 text-center">
    <div class="container mx-auto px-6">
      <p class="text-slate-400 mb-6 font-medium">
        {{ $t('footer.copy') }}
      </p>
      <div class="flex justify-center space-x-6">
        <a
          href="#"
          class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:text-emerald-400 transition-colors"
        >
          <UIcon name="i-simple-icons-telegram" class="w-5 h-5" />
        </a>
        <a
          href="#"
          class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:text-emerald-400 transition-colors"
        >
          <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
        </a>
        <a
          href="#"
          class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:text-emerald-400 transition-colors"
        >
          <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
</template>