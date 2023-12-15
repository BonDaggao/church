import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_WORKER_URL,
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

export default instance;
