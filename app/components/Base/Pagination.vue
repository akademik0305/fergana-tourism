<script lang="ts" setup>
interface Props {
  current: number
  last: number
}

const props = defineProps<Props>()
const emit = defineEmits(['change'])

const changePage = (page: number) => {
  if (page >= 1 && page <= props.last) {
    emit('change', page)
  }
}

// Sahifalar mantiqi (aqlli ro'yxat: 1 ... 4 5 6 ... 10)
const pages = computed(() => {
  const range = []
  for (let i = 1; i <= props.last; i++) {
    if (
      i === 1 || 
      i === props.last || 
      (i >= props.current - 1 && i <= props.current + 1)
    ) {
      range.push(i)
    } else if (i === props.current - 2 || i === props.current + 2) {
      range.push('...')
    }
  }
  return range
})
</script>

<template>
  <nav class="flex items-center justify-center gap-2 mt-12">
    <button 
      @click="changePage(current - 1)"
      :disabled="current === 1"
      class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
      <UIcon name="material-symbols:chevron-left-rounded" class="text-xl" />
    </button>

    <template v-for="(page, index) in pages" :key="index">
      <button 
        v-if="typeof page === 'number'"
        @click="changePage(page)"
        class="w-10 h-10 rounded-lg border text-sm font-medium transition-all"
        :class="current === page ? 'bg-main text-white border-main shadow-md' : 'border-gray-200 hover:border-main hover:text-main'"
      >
        {{ page }}
      </button>
      <span v-else class="px-1 text-gray-400 select-none">{{ page }}</span>
    </template>

    <button 
      @click="changePage(current + 1)"
      :disabled="current === last"
      class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
      <UIcon name="material-symbols:chevron-right-rounded" class="text-xl" />
    </button>
  </nav>
</template>