import axios from 'axios';
const URL = 'http://localhost:3000';
const JWT_TOKEN = 'token';
// const JWT_TOKEN = authService.fetchToken() || "";

const api = axios.create({
  baseURL: URL,
  headers: {
    'Authorization': `Bearer ${JWT_TOKEN}`
  }
});

export const login = async(data) => {
    try{
        console.log(JWT_TOKEN)
      const resp = await api.post('/users/login', data);
      const {data: { token, user } } = resp;
      localStorage.setItem('token', token);
      return {user, token};
    } 
    catch (e) {
      throw e.message;
    }
  };

  export const signup = async(data) => {
    try {
        console.log(data)
      const resp = await api.post('/users/signup', data)
      console.log(data)
      const { data: { user, token } } = resp
      localStorage.setItem('token', token);
      console.log(resp + user)
      return user
    } catch (e) {
      throw e
    }
  }