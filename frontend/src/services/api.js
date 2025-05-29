// Example: src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchHello = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/hello`);
  return res.data;
};
export const fetchData = async (endpoint) => {
  const res = await axios.get(`https://chat-app-pro1-7y2z.onrender.com/api/${endpoint}`);
  return res.data;
};
