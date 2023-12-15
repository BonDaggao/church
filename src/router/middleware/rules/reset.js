
import { useAuthStore } from "../../../stores/auth";

export default (to, from, next) => {
  const store = useAuthStore();
  const { temporary_token } = to.query;
  
  // initial token checking
  if (temporary_token == '') {
    store.isError = true;
    store.ErrorMessage = 'Invalid token used!';
    setTimeout(() => {
      store.ErrorMessage = null;
      store.isError = false;
    }, 3000);
    
    return next({ name: "login" });
  }

  // async await to hit endpoint for token validation
  (async () => {
    try {
      const res = await store.resetPasswordTokenChecker({ token: temporary_token });
      let isExpired = res.result.is_expired;

      if (isExpired) {
        store.isError = true;
        store.ErrorMessage = 'Token is already expired!';
        setTimeout(() => {
          store.ErrorMessage = null;
          store.isError = false;
        }, 3000);

        return next({ name: "login" });
      }
      
      return next();
    } catch (error) {
      store.isError = true;
      store.ErrorMessage = 'An error has occured';
      setTimeout(() => {
        store.ErrorMessage = null;
        store.isError = false;
      }, 3000);

      return next({ name: "login" });
    }
  })();
};
