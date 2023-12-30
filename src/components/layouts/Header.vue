<template>
  <q-header class="text-white" style="background-color: #ffaa2b; border-bottom: 1px solid #e0e0e0!important;">
    <q-toolbar>
      <q-btn dense flat round icon="menu" color="black" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-img 
          src="/img/church_icon.png" 
          lazy-src="/img/church_icon.png"
          height="10px"
          style="max-width:180px; margin: 10px;"
        />
      </q-toolbar-title>

      <!-- Spacing for even distribution -->
      <q-space />

      <!-- Adding links to the header with spacing -->
      <q-btn flat dense label="HOME" @click="navigateTo('')" class="black-text" />
      <q-btn flat dense label="ABOUT" @click="navigateTo('about')" class="black-text" />
      <q-btn flat dense label="BLOG" @click="navigateTo('blog')" class="black-text" />
      <q-btn flat dense label="CEREMONIES" @click="navigateTo('ceremonies')" class="black-text" />
      <q-btn flat dense label="DOCUMENT" @click="navigateTo('document')" class="black-text" />

      <!-- Spacing for even distribution -->
      <q-space />

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
import { ref, inject, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useAuthStore();
const emitter = inject('emitter')
const userData = ref('')

function toggleLeftDrawer() {
  emitter.emit('toggleDrawer')
}

onMounted( async () => {
  userData.value =  await store.isAuthenticated()
})

async function logout() {
  await store.logout()
  login()
}

function login(){
  const path = `/login`
  router.push(path)
}

// Navigation function for the buttons
function navigateTo(routeName) {
  const path = `/${routeName.toLowerCase()}`
  router.push(path)
}
</script>

<style scoped>
/* Increase the font size of the buttons */
.black-text {
  color: black;
  font-size: 20px; /* Adjust the font size as per your preference */
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>
