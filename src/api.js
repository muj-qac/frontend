import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.mujep.in:5000/api/v1',
  withCredentials: 'true',
  headers: { 'Access-Control-Allow-Origin': 'true' },
});
