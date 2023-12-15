import { useAuthStore } from "../../../stores/auth";

export default (to, from, next) => {
  // const token = sessionStorage.user
  //   ? JSON.parse(sessionStorage.user).authorization.access_token
  //   : null;
    const token = sessionStorage.user
    ? JSON.parse(sessionStorage.user)
    : null;
    
  if (sessionStorage.authenticated && token) {
     next({ name: "webapps" });
  } else {
    next();
  }

};
