<script setup>
import WordItem from "./components/WordMainItem.vue"
import TheHeader from "./components/TheHeader.vue"
import "primeicons/primeicons.css"

const wordItems = [
  {
    id: 1,
    title: "Кринж",
    tags: ["Новое", "Twitch"],
    desc: "Чувство, взывающее «испанский стыд»; состояние неловкости. Произошло от английского слова cringe – стыд"
  },
  {
    id: 2,
    title: "Симпа",
    tags: ["Новое", "Twitch"],
    desc: "Чувство, взывающее «испанский стыд»; состояние неловкости. Произошло от английского слова cringe – стыд"
  }
]
</script>

<template>
  <TheHeader></TheHeader>
  <div>
    <div class="max-w-screen-lg mx-auto">
      <div class="flex flex-col gap-4">
        <WordItem
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
