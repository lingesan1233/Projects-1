// src/services/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Test API route
export const fetchHello = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/hello`);
  return res.data;
};

// Generic GET fetcher
export const fetchData = async (endpoint) => {
  const res = await axios.get(`${API_BASE_URL}/api/${endpoint}`);
  return res.data;
};

// ===== AUTH API CALLS =====

// Signup
export const signupUser = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/api/auth/signup`, userData);
  return res.data;
};

// Login
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_BASE_URL}/api/auth/login`, userData);
  return res.data;
};

// Request password reset (optional, if email-based)
export const requestPasswordReset = async (email) => {
  const res = await axios.post(`${API_BASE_URL}/api/auth/request-reset`, { email });
  return res.data;
};

// Password reset with token
export const resetPassword = async (token, newPassword) => {
  const res = await axios.post(`${API_BASE_URL}/api/auth/reset-password`, { token, newPassword });
  return res.data;
};

// Password reset directly with email and new password (if not using token)
export const resetPasswordDirect = async (email, newPassword) => {
  const res = await axios.post(`${API_BASE_URL}/api/auth/reset-password`, { email, newPassword });
  return res.data;
};
