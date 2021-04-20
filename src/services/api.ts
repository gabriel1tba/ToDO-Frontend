import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
  },
});

export default api;
