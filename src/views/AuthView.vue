<template>
    <q-layout>
        <q-page-container>
            <Login />
        </q-page-container>
    </q-layout>
</template>

<script>
import Login from "../views/login/index.vue";
export default {
  name: "Sign-in",
  components: {
    Login,
  },
};
</script>

<style></style>