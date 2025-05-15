// src/api/axiosInstance.ts
const API_URL = process.env.REACT_APP_API_URL;
import axios from 'axios';
import AuthService from './auth.service';

const axiosInstance = axios.create({
  baseURL: API_URL, // твій бекенд
  withCredentials: false,
});

axiosInstance.interceptors.request.use((config) => {
    const token = AuthService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;