import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

export default instance;

export const signIn = (data) => instance.post('/auth/register', data);
