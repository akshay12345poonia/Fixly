// frontend/src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fixly-d3hr.onrender.com/api'
});

// Add token to requests if available
const token = localStorage.getItem('token');
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
