<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <q-list>
      <template v-for="link in links" :key="link.title">
        <Link id="sidebar-label" v-if="!link.items" v-bind="link" />
        <ExpandedLink id="sidebar-label" v-if="link.items" v-bind="link" />
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import Link from './Link.vue'
import ExpandedLink from './ExpandedLink.vue'

const emitter = inject('emitter')

const leftDrawerOpen = ref(false)
const router = useRouter()
const links = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/home'
  },
]

function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
 emitter.on('toggleDrawer', () => toggleDrawer())


 function webapps(){
    const path = 'webapps'
    router.push(path)
  }
</script>
<style lang="scss">
#button-apps{
  background-color: #00B85D!important; 
  color: white;
}
#sidebar-label{
  color: #6C757D;
  font-weight: 400;
}
#sidebar-label:active{
  color: black;
  font-weight: 800;
}
#sidebar-label:hover{
    color: #00b85d;
    font-weight: 500;
    background-color: #00b85c1e !important;
}
</style>