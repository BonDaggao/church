<template>
  <div id="auth-view">
    <div id="overlay"></div>
      <q-page class="window-height window-width row justify-center items-center">
        <div class="row">
          <q-card id="login-card" square bordered class="q-pa-lg">
            <q-card-section>
              <q-img
                id="logo"
                src="/img/novadeci-logo.svg"
                lazy-src="/img/novadeci-logo.svg"
                max-height="10"
                max-width="20"
              />
            </q-card-section>
            <q-card-section>
              <div class="text-h6" id="login-title">Login to Account</div>
              <div class="text-subtitle2" id="login-sub-title">Enter your credentials to access your account.</div>
            </q-card-section>
            <Login />
            </q-card>
        </div>
      </q-page>
  </div>
</template>
<script>
import Login from "./login-form.vue";

export default {
  name: "login-page",
  components: {
    Login,
  },
};
</script>
<style lang="scss" scoped>
#login-card {
  width: 400px;
  border-radius: 10px!important;
}
#login-title{
  color:black; 
  font-weight: 700;
}
#login-sub-title{
  color: #6C757D;
}
#auth-container {
  border-radius: 10px;
  padding: 10px 15px;
}
#auth-view {
  background-image: url("/img/loginBG.png");
  background-size: 100% 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  margin: 0 0 -100% 0; // CHANGE IS HERE
  #auth-view-image {
    svg {
      width: auto;
      height: auto;
    }
  }

  #logo {
    margin: 0 auto;
  }
  #logo-text {
    width: 350px;
    margin-left: 10%;
    top: 581px;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 31px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4px;
  }
  #auth-container {
    margin: auto;
    margin-top: 10%;
    z-index: 9999;
  }
  #overlay {
    position: absolute;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
  }
}
body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>
