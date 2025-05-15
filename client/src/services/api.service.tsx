// src/api/axiosInstance.ts
const API_URL = process.env.REACT_APP_API_URL;
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL, // твій бекенд
  withCredentials: false,
});

export default axiosInstance;