import axios from 'axios';

const apiBaseUrl = window.RUNTIME_CONFIG?.API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

export default api;
