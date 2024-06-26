import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

authApi.defaults.headers.common['Content-Type'] = 'application/json';

// GET http://localhost:3001/
export const getRoot = async () => {
  try {
    const response = await authApi.get('/');  // get, post, put, delete
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// GET http://localhost:3001/convert?mile=100
export const getKm = async (mile) => {
  try {
    const response = await authApi.get(`/convert?mile=${mile}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// POST http://localhost:3001/items
export const postItem = async (obj) => {

  try {
    const response = await authApi.post('/items', obj);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }

}

// PUT http://localhost:3001/items
export const putItem = async (obj) => {

  
}
