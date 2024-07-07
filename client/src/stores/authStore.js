import { apiService } from "@/services/apiService"
import { defineStore } from "pinia"

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    email: "",
    pass: "",
    currentTab: 1
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
