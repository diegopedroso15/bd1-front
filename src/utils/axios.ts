import axios from 'axios';

let axiosInstance: any;

if (typeof window !== 'undefined') {
  axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('tk'),
    },
  });
} else {
  axiosInstance = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: '',
    },
  });
}

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('tk');
    console.log(token);
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
