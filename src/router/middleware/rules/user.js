import { useAuthStore } from "../../../stores/auth";

export default (to, from, next) => {
  const store = useAuthStore()
  const token = sessionStorage.user ? JSON.parse(sessionStorage.user) : null;

  if (sessionStorage.authenticated && token) {

    if(store.forgot === true){
        next({name: 'change-password-page'})
    }
    next();
  } else {
    next({ name: "login" });
  }
};

