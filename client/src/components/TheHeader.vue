<script setup>
import { useAuthStore } from "../stores/authStore"

import IconField from "primevue/iconfield"
import InputIcon from "primevue/inputicon"
import InputText from "primevue/inputtext"

import Password from "primevue/password"

import Dialog from "primevue/dialog"
import Divider from "primevue/divider"
import Button from "primevue/button"

import { ref } from "vue"

const authStore = useAuthStore()
const activeTab = ref(authStore.currentTab)

const name = ref("")
const mail = ref("")
const pass = ref("")

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
        :style="{ width: '32rem', height: '34rem', margin: '1rem' }"
        :draggable="false"
      >
        <Transition
          name="slide-up"
          mode="out-in"
        >
          <div
            v-if="activeTab == 1"
            class="flex items-center flex-col text-center gap-12"
          >
            <h2 class="text-4xl font-bold font-jura">
              Добро пожаловать в <br />
              Slang It!
            </h2>
            <div class="auth-content flex flex-col gap-2 justify-center w-64">
              <InputText
                v-model="name"
                type="text"
                placeholder="Имя"
              />
              <InputText
                v-model="mail"
                type="text"
                placeholder="Почта"
              />
              <Button
                @click="activeTab = 2"
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
          <div
            v-else-if="activeTab == 2"
            class="flex items-center flex-col text-center gap-12"
          >
            <h2 class="text-4xl font-bold font-jura">Укажите пароль</h2>
            <div class="auth-content flex flex-col gap-2 justify-center w-64">
              <div class="w-full">
                <Password
                  v-model="pass"
                  :feedback="false"
                  toggleMask
                />
              </div>
              <Button
                @click="activeTab = 1"
                aria-label="Зарегистрироваться"
                label="Зарегистрироваться"
              />
            </div>
          </div>
        </Transition>
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

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
