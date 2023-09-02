import axios, { AxiosInstance } from "axios";

const { VITE_API_URL } = import.meta.env;

export const axiosClient: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
});
