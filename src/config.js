import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://booktravel-api.herokuapp.com/api"
})