<template>
  <q-item clickable :to="link" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon color="#000000" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
    // required: true
  },
  link: {
    type: String
  },
  icon: {
    type: String
  }
})
</script>