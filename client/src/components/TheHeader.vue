<script setup>
import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import InputText from "primevue/inputtext"

import Dialog from "primevue/dialog"

import Divider from "primevue/divider"

import Button from "primevue/button"

import { ref } from "vue"

const inputValue = ref("")

const showAuthDialog = ref(false)
</script>

<template>
  <div class="border-b border-s-stroke-light mb-7 p-3 flex justify-between">
    <div class="left"></div>
    <div class="center">
      <IconField>
        <InputIcon class="pi pi-search" />
        <InputText
          placeholder="Search"
          class=""
          v-model="inputValue"
        />
      </IconField>
    </div>
    <div class="right">
      <Button
        @click="showAuthDialog = true"
        icon="pi pi-user"
        aria-label="Profile"
        outlined
      />
      <Dialog
        v-model:visible="showAuthDialog"
        modal
        footer=" "
        :style="{ width: '32rem' }"
        :draggable="false"
      >
        <div class="flex items-center flex-col text-center gap-12">
          <h2 class="text-4xl font-bold font-jura">
            Добро пожаловать в <br />
            Slang It!
          </h2>
          <div class="auth-content flex flex-col gap-2 justify-center w-64">
            <InputText
              v-model="value3"
              type="text"
              placeholder="Имя"
            />
            <InputText
              v-model="value3"
              type="text"
              placeholder="Почта"
            />
            <Button
              @click="showAuthDialog = true"
              aria-label="Зарегистрироваться"
              label="Зарегистрироваться"
            />
            <Divider
              align="center"
              type="solid"
            >
              <b>ИЛИ</b>
            </Divider>
            <Button
              icon="pi pi-google"
              @click="showAuthDialog = true"
              aria-label="Продолжить с Google"
              label="Продолжить с Google"
              outlined
            />
          </div>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<style>
.p-divider-content {
  background-color: #eaeaea !important;
}

.p-dialog-content {
  display: flex;
  justify-content: center;
}
</style>
