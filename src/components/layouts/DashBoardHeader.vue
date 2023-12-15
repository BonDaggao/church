<template>
  <q-header class="text-white" style="background-color: #fff; border-bottom: 1px solid #e0e0e0!important;">
    <q-toolbar>
      <q-toolbar-title>
          <q-img 
              src="/img/novadeci-logo.svg" 
              lazy-src="/img/novadeci-logo.svg"
              height="45px"
              style="max-width:180px; margin: 10px;"
          />
      </q-toolbar-title>
      <q-icon style="color: black; font-weight: 600; font-size: 20px;" class="q-mr-xs" name="notifications"></q-icon>
      <q-avatar class="q-ma-md">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      <label style="color: black; font-weight: 600;" class="q-ma-xs">{{ store.userData.email }}</label>
      <q-btn-dropdown flat class="q-mr-xs" size="10px" color="white" text-color="black">
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>My Profile</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="logout">
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>
  
<script setup>
import { useAuthStore } from "@/stores/auth";
import { inject } from 'vue'
import { useRouter } from 'vue-router'


  const router = useRouter()
  const store = useAuthStore();
  const emitter = inject('emitter')
  
  function toggleLeftDrawer() {
    emitter.emit('toggleDrawer')
  }
  async function logout() {
    await store.logout()
    // sessionStorage.clear()
    login()
  }
  function login(){
      const path = `/login`
      router.push(path)
  }
</script>
  