// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // твій бекенд
  withCredentials: false,
});

export default axiosInstance;