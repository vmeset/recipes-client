import axios from "axios"

const $host = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
})

const $authHost = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true
})

$authHost.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

export {
  $host,
  $authHost
}