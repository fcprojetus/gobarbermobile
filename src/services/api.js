import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.188.136',
  baseURL_Local: 'http://10.0.2.2:3333',
});

export default api;
