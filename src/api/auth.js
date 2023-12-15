import api from "./api";

export default {
  userNameCheker(params){
    return api.post("/api/v1/first-login-checker", params);
  },
  otpValidation(params){
    return api.post("/api/v1/otp/verify", params);
  },
  login(params) {
    return api.post("/api/v1/login", params);
  },
  logout() {
    return api.get("/api/v1/logout");
  },
  forgetpassword(params) {
    return api.post("/api/v1/forgot-password", params);
  },
  resetpassword(params) {
    return api.post("/api/v1/change-password", params);
  },
  changepasswordbyotp(params){
    return api.post("/api/v1/reset-password",params);
  },
  resendOTP(payload){
    return api.post("/api/v1/otp/resend",payload);
  },
  resetpasswordauth(params) {
    return api.post("/api/v1/reset-password-by-token", params);
  },
  isAuthenticated() {
    return api.get("/api/v1/authenticated");
  },
  membershipValidationMessage(id) {
    return api.get(`/api/v1/maintenance/employees/${id}/verify-membership-application`);
  },
  resetPasswordTokenChecker(params) {
    return api.post("/api/v1/reset-password-token-checker", params);
  }
  
};
