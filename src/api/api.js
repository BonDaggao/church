import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_MIDDLEWARE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((request) => {

  sessionStorage.user ? request.headers.Authorization = `Bearer ${JSON.parse(sessionStorage.user)}` : ""
  request.headers["Access-Control-Allow-Origin"] = "*";
  request.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
  request.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";
  
  return request;

});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // sessionStorage.removeItem("user");
//       // sessionStorage.removeItem("authenticated"); // Remove session storage when 401 error detected.
//       // next({ name: "login" });
//     }

//     return Promise.reject(error);
//   }
// );

export default instance;
