import axios from 'axios';
import { HeadInterceptor } from './interceptors';

export const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '',
});

HttpClient.interceptors.request.use(HeadInterceptor.onFulfilled);
