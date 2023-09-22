import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": sessionStorage.getItem("token")
  },
});

export default axiosInstance;
