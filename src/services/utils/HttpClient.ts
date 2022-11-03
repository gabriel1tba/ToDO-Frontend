import axios from 'axios';

const HttpClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
});

export default HttpClient;
