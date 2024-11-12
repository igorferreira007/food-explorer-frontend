import axios from "axios"

export const api = axios.create({
  baseURL: "https://food-explorer-backend-s63w.onrender.com",
  withCredentials: true
})