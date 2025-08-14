import axios, { AxiosError } from 'axios';
import { env } from '../lib/env';

export const http = axios.create({
  baseURL: env.apiBaseUrl,
  withCredentials: true,
});

http.interceptors.request.use((cfg) => {
  // attach auth token if later available
  return cfg;
});

http.interceptors.response.use(
  (r) => r,
  (err: AxiosError<{ message?: string }>) => {
    // normalize error
    const msg = err.response?.data?.message ?? err.message ?? 'Request failed';
    return Promise.reject(new Error(msg));
  }
);
