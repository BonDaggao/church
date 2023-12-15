<template>
    <!-- <q-form ref="loginform" v-model="valid"> -->
      <div class="my-4 text-subtitle-1">
        <div v-if="isError === true">
            <div dense outlined type="error">
              <div>
                <div style="background-color: #DC3545;" class="q-mx-md">
                  <p style="padding: 1rem 1rem 1rem 1rem; color: white;">{{ ErrorMessage }}</p> 
                </div>
              </div>
            </div>
          </div>
      </div>
      <q-card-section class="q-pt-xs">
        <q-input
            v-on:keyup.enter="onNext"
            class="q-mb-md"
            name="login"
            type="text"
            outlined
            solo
            required
            v-model="formData.username"
            background-color="#EDF2F7"
            label="Username"
            dense
            :input-style="{ fontSize: '15px'}"
            :readonly="!!checker"
          />
          <q-input
              v-if="checker"
              v-on:keyup.enter="onSubmit"
              solo
              required
              v-model="formData.password"
              background-color="#EDF2F7"
              label="Password"
              dense
              outlined
              :type="isPwd ? 'password' : 'text' "
             >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div v-if="checker" class="row justify-end q-my-lg">
              <span @click="forgotPassword" id="nov-color" class=" text-subtitle1 text-weight-bold cursor-pointer">Forgot Password? </span>
          </div>
      <q-btn 
          block
          id="btn-color"
          class="lbutton full-width" 
          :label="checker ? 'SIGN IN' : 'NEXT' "
          dark
          @click="async () => !checker ? await onNext() : await onSubmit() "
          :loading="loading">
          <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Loading...
          </template>
        </q-btn>
      </q-card-section>
    <!-- </q-form> -->
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import { useAuthStore } from "@/stores/auth";
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
 

  const router = useRouter()
  const authStore = useAuthStore();
  const $q = useQuasar()
  const isPwd = ref(true)
  const loading = ref(false)
  let isError = ref(false)
  let ErrorMessage = ref('')
  let ErrorMessageUsername = ref('')
  let ErrorMessagePassword = ref('')

  const checker = ref(false)

  const formData = reactive({
    username: '',
    password:'',
  })

  // To show error notif if coming from reset password page
  notifErrorFromAuth(authStore.isError, authStore.ErrorMessage)

  onMounted(() =>{
    sessionStorage.clear()
  })
  async function onNext(){
    loading.value = true

    try {
        const data =  await authStore.userNameCheker({username :formData.username})
        data.status === 'inactive' ?  (router.push('/otp')) : (checker.value = true)
        loading.value = false

    } catch (error) {
      if (error.response && (error.response.status == 400 || error.response.status == 401)) {

        loading.value = false
        isError.value = true;
        ErrorMessage.value = error.response.data.message;
        setTimeout(() => {
            isError.value = false;
        }, 3000);
      }
      if (error.response && error.response.status == 422) {
        
        if(formData.username === '' ){

          loading.value = false
          isError.value = true;
          ErrorMessage.value = error.response.data.errors.username[0];
          console.log(ErrorMessage.value)
          setTimeout(() => {
            isError.value = false;
          }, 3000);
        }

      }
      return false
    }
  }
  async function onSubmit(){
    loading.value = true
    try {
      const data =  await authStore.login(formData)
      console.log("result",data)
      // data.force_change_password ? (router.push('/otp')) : (router.push('/webapps'))
      if(data.force_change_password === true){
        router.push('/change-password')
        loading.value = false
      }else{
        router.push('/webapps')
        loading.value = false
      }
    } catch (error) {

      if (error.response && error.response.status == 401) {
        loading.value = false
        isError.value = true;
        ErrorMessage.value = error.response.data.data.message;
        setTimeout(() => {
            isError.value = false;
        }, 3000);
      }
      if (error.response && error.response.status == 422) {
        
        if(formData.password === ''){
          loading.value = false
          isError.value = true;
          ErrorMessage.value = error.response.data.errors.password[0];
          console.log(ErrorMessage.value)
          setTimeout(() => {
            isError.value = false;
          }, 3000);
        }
        if(formData.username === '' ){
          loading.value = false
          isError.value = true;
          ErrorMessage.value = error.response.data.errors.username[0];
          console.log(ErrorMessage.value)
          setTimeout(() => {
            isError.value = false;
          }, 3000);
        }
        if (formData.username === '' && formData.password === '' ){
          loading.value = false
          isError.value = true;
          ErrorMessageUsername.value = error.response.data.errors.username[0];
          ErrorMessagePassword.value = error.response.data.errors.password[0];
          console.log(ErrorMessage.value)
          setTimeout(() => {
              isError.value = false;
          }, 3000);
        }
      }
    }
  }

  function forgotPassword(){
    router.push('/forgot-password')
  }

  function notifErrorFromAuth(authIsError, authErrorMessage) {
    if (authIsError) {
      $q.notify({
          position: 'bottom-right',
          type: 'negative',
          message: authErrorMessage
      })
    }
  }
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap");
#nov-color{
  color: #00B85D!important;
}
#btn-color{
  background-color: #00B85D!important;
  color: white!important;;
}
#login {
  font-family: Inter !important;
  .text {
    margin: 0 0 0 0;
    text-transform: none;

    a {
      color: #3851ff !important;
      font-size: 12px;
      cursor: pointer;
      text-decoration: none;
    }
  }
  .title {
    font-family: Inter !important;
    color: #6c757d !important;
    font-weight: 500;
  }
  .lbutton {
    font-family: Inter !important;
    text-transform: none !important;
    font-size: 15px;
    border: none !important;
    color: white;
  }
}
</style>
