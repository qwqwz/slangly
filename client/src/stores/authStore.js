import { apiService } from "@/services/apiService"
import { defineStore } from "pinia"

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    name: "",
    emailInvalid: false,
    validateEmailLoading: false,
    emailErrorMessage: "",
    pass: "",
    currentTab: 1
  }),
  actions: {
    async validateEmail(value) {
      try {
        const res = await apiService.post("/auth/validateEmail", { email: value })
        this.emailInvalid = !res.data.valid
        res.data.valid ? (this.emailErrorMessage = "") : (this.emailErrorMessage = "Данная почта уже занята")
      } catch (err) {
        if (err.response.data[0].msg == "Неверный формат почты") {
          this.emailInvalid = true
          this.emailErrorMessage = err.response.data[0].msg
        }
      } finally {
        this.validateEmailLoading = false
      }
    }
  }
})
