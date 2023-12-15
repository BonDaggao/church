import { useAuthStore } from "../../../stores/auth";

export default (to, from, next) => {
  const store = useAuthStore()
  if(store.data.hasOwnProperty('force_change_password') && !!store.data.force_change_password){
    next();
  }
  if(store.is_valid_otp === false){
    next({name: "login" });
  }else{
    next();
  }
};

