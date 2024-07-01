<script setup>
import { onMounted, computed } from "vue"
import { useWordsStore } from "./stores/WordsStore"

import WordItem from "./components/WordMainItem.vue"
import TheHeader from "./components/TheHeader.vue"
import "primeicons/primeicons.css"

const wordsStore = useWordsStore()

const wordItems = computed(() => wordsStore.wordsList)

onMounted(() => {
  wordsStore.getWordsList()
})
</script>

<template>
  <TheHeader></TheHeader>
  <div>
    <div class="max-w-screen-lg mx-auto">
      <div class="flex flex-col gap-4">
        <div v-if="wordsStore.loading">Загрузка...</div>
        <WordItem
          v-else
          v-for="item in wordItems"
          :key="item.id"
          :title="item.title"
          :tags="item.tags"
          :desc="item.desc"
        ></WordItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
