import apiClient from "./apiClient"

export const apiService = {
  async get(resource) {
    return await apiClient.get(resource)
  },
  async post(resource, data) {
    return await apiClient.post(resource, data)
  },
  async put(resource, data) {
    return await apiClient.put(resource, data)
  },
  async delete(resource) {
    return await apiClient.delete(resource)
  }
}
