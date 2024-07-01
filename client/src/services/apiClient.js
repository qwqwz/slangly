import axios from "axios"

const apiClient = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
})

export default apiClient
