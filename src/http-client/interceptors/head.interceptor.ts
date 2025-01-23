import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

export const HeadInterceptor = {
  onFulfilled: async (config: InternalAxiosRequestConfig) => {
    const headers = new AxiosHeaders();
    headers.set({
      'Content-Type': 'application/json',
    });

    config.headers = headers;

    return config;
  },
};
