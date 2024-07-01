import { defineStore } from "pinia"

export const useWordsStore = defineStore("wordsStore", {
  state: () => ({
    wordsList: [],
    loading: false
  }),
  actions: {
    async getWordsList() {
        this.loading = true;
        try {
            
        }
    }
  }
})
