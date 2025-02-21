import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}admin/login`, {
    username,
    password,
  });
  return response.data;
};

export const checkAuth = async () => {
  const response = await axios.get(`${API_URL}admin/check`);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}admin/logout`);
  return response.data;
};
