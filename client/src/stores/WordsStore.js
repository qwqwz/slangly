import { apiService } from "@/services/apiService"
import { defineStore } from "pinia"

export const useWordsStore = defineStore("wordsStore", {
  state: () => ({
    wordsList: [],
    loading: false
  }),
  actions: {
    async getWordsList() {
      this.loading = true
      try {
        const res = await apiService.get("/words/getList")
        this.wordsList = res.data
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    }
  }
})
