<script setup>
defineProps({
  id: Number,
  title: String,
  tags: Array,
  desc: String
})
</script>
<template>
  <div class="border rounded-xl p-8 border-s-stroke-light">
    <h2 class="font-jura font-bold text-3xl text-s-text-default pb-4 md:text-5xl">{{ title }}</h2>
    <div class="tags flex gap-2 mb-8 select-none text-s-text-default">
      <div
        v-for="tag in tags"
        :key="tag"
        class="cursor-pointer py-1.5 px-4 bg-s-bg-light w-fit rounded-lg text-sm font-semibold"
      >
        {{ tag }}
      </div>
    </div>
    <div class="text-s-text-default font-normal">
      {{ desc }}
    </div>
  </div>
</template>
