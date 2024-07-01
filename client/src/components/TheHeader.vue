<script setup>
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import InputText from "primevue/inputtext"

import { ref } from "vue"

const inputValue = ref("")

const wordsList = ref(["Кринж", "Симпа", "Завод"])
</script>

<template>
  <div class="border-b border-s-stroke-light mb-7 p-3 flex justify-center">
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText
        placeholder="Search"
        class=""
        v-model="inputValue"
      />
    </IconField>
    {{ inputValue }}
  </div>
</template>
