import axios from 'axios'

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000/api'

export const auth = {
  signup: async (userData: {
    name: string
    email: string
    password: string
    phone: string
  }) => {
    const response = await axios.post(`${API_URL}/auth/signup`, userData)
    return response.data
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials)
    return response.data
  },

  getProfile: async (token: string) => {
    const response = await axios.get(`${API_URL}/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  }
} 