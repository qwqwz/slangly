import { defineStore } from "pinia"

export const useWordsStore = defineStore("wordsStore", {
  state: () => ({
    wordsList: [
      {
        title: "Добро",
        tags: ["Фраза", "Позитив"],
        id: "6682dd1e982ac62f190da649",
        createdAt: "2024-07-01T16:45:18.551Z"
      },
      {
        title: "Кринж",
        tags: ["Новое", "Twitch"],
        id: "6682dce5982ac62f190da645",
        createdAt: "2024-07-01T16:44:22.000Z"
      }
    ]
  })
})
