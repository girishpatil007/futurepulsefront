import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  async login(email: string, password: string) {
    const response = await api.post('/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async signup(name: string, email: string, password: string) {
    const response = await api.post('/signup', { name, email, password });
    return response.data;
  },

  async getCurrentUser() {
    const response = await api.get('/user/profile');
    return response.data;
  },

  logout() {
    localStorage.removeItem('token');
  },
};

export const feedbackService = {
  async submitFeedback(message: string) {
    const response = await api.post('/feedback', { message });
    return response.data;
  },
};