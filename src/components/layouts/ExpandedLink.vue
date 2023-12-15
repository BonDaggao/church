<template>
  <q-expansion-item expand-separator :icon="icon" :label="title">
    <div class="q-pl-md">
      <Link v-for="link in props.items" :key="link.title" v-bind="link" />
    </div>
  </q-expansion-item>
</template>

<script setup>
import Link from './Link.vue'

const props = defineProps({
  title: {
    type: String
  },
  icon: {
    type: String
  },
  items: {
    type: Object,
    default: {}
  }
})
</script>
