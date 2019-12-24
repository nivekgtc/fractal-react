import axios from 'axios';

const api = axios.create({
  baseURL: 'https://punkapi.com/documentation/v2',
});

export default api;
