import { defineStore } from "pinia";
import authRepository from "../api/auth";
import router from "../router";

//id: "auth",
const state = () => ({
  user: sessionStorage.user ? JSON.parse(sessionStorage.getItem("user")) : null,
  isError: false,
  ErrorMessage: null,
  authenticated: sessionStorage.user
    ? JSON.parse(sessionStorage.getItem("user"))
    : false,
  modules: [],
  forgot:'',
  data: {},
  userData: [],
  username:sessionStorage.user ? JSON.parse(sessionStorage.getItem("user")) : null,
  is_valid_otp:'',
  remaining_attempts:'',
  status:''
});
const getters = {
  moduleslist: (state) => state.modules
};
const actions = {

  async userNameCheker(params) {
     
      const data = await authRepository.userNameCheker(params)
      this.username = data.data.result.username
      this.status = data.data.result.status;
      sessionStorage.setItem("username", JSON.stringify(this.username));
      sessionStorage.setItem("status", JSON.stringify(this.status));
      return data.data.result
      
  },
  async otpValidation(params) {
     
    const data = await authRepository.otpValidation(params)
    this.is_valid_otp = data.data.result.is_valid_otp
    this.remaining_attempts = data.data.remaining_attempts
    return data.data.result
    
},
  async login(params) {

      const data = await authRepository.login(params)
      this.user = data.data.result.authorization.access_token;
      this.modules = data.data.result.user.modules;
      this.forgot = data.data.result.user.force_change_password;
      this.data = data.data.result.user;
      this.authenticated = true;
      sessionStorage.setItem("user", JSON.stringify(this.user));
      sessionStorage.setItem("authenticated", true);
      
      return data.data.result
  },
  async logout() {
    try {
      const data = await authRepository.logout()  
      return data
      
    }catch (error) {
    }
  },

  async getForgotPassword(params){
    try {
      const data = await authRepository.forgetpassword(params)
      return data
    }catch (error) {
    }
  },
  async resendOTP(payload) {
      const response = await authRepository.resendOTP(payload)
      return response
  },
  async changepasswordbyotp(params){
    const data = await authRepository.changepasswordbyotp(params)
    //await this.logout() 
    this.forgot = false;
    return data
  },
  async resetPassword(params){
    const data = await authRepository.resetpassword(params)
    //await this.logout() 
    this.forgot = false;
    return data
  },
  async resetPasswordAuth(params){
    try {
      const data = await authRepository.resetpasswordauth(params)
      //await this.logout()
      this.forgot = false;
      return data
      
    } catch (error) {

      let vm = this;
      this.isError = true;
      this.ErrorMessage = false;
      this.ErrorMessage = error.response.data.errors;
      setTimeout(() => {
        vm.ErrorMessage = null;
        vm.isError = false;
      }, 3000);
    }
  },
  async isAuthenticated(){
    try {
      const data = await authRepository.isAuthenticated()
      this.modules = data.data.result.user.modules;
      this.userData = data.data.result.user
      return data.data.result

    } catch (error) {

      if (error.response && error.response.status == 401) {
        sessionStorage.clear()
        router.push("/login");
      }
    }
  },
  async membershipValidationMessage(id){
    return await authRepository.membershipValidationMessage(id)
  },
  async resetPasswordTokenChecker(params) {
    try {
      const res = await authRepository.resetPasswordTokenChecker(params)
      return res.data
    } catch (error) {      
      let vm = this
      this.isError = true
      this.ErrorMessage = error.response.data.errors
      setTimeout(() => {
        vm.ErrorMessage = null
        vm.isError = false
      }, 3000)

      return error
    }
  }
};
export const useAuthStore = defineStore("authStore", {
  persist: {
    storage: sessionStorage,
    paths: ['modules','forgot','username'],
  },
  state,
  getters,
  actions,
});
