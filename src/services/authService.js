import { mockUsers } from '../data/mockData';
import api from './api';

// Mocked service. Later replace with: return api.post('/auth/login', credentials)
export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === email && u.password === password);
      if (user) {
        resolve({ data: { token: "mock-jwt-token-123", user } });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 800); // Simulate network delay
  });
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
