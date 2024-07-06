import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"

import PrimeVue from "primevue/config"

import Noir from "./assets/NoirTheme"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: ".p-dark"
    }
  }
})

app.mount("#app")
