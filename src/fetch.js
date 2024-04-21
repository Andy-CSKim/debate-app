import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const getRoot = async () => {
  try {
    const response = await authApi.get('/');  // http://localhost:3001/
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};