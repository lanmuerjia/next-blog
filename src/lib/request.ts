import axios, { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // 响应错误处理
    if (error.response) {
      console.error("Error:", error.response.data.message || "请求失败");
    } else {
      console.error("Error: 网络错误");
    }
    return Promise.reject(error);
  },
);

export default request;
