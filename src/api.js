import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.mujep.in/api/v1',
  withCredentials: 'true',
  headers: { 'Access-Control-Allow-Origin': 'true' },
});
