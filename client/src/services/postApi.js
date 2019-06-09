import axios from 'axios'

const URL = 'http://localhost:3000';

const api = axios.create({
    baseURL:   `${URL}/posts`
})

export const fetchAllPosts = async ()=>{
    try {
      const response = await api.get('/')
    return response.data;  
    } catch (e) {
        console.log({msg:'e',e})
    }
}

export const createPost = async (data) => {
    try {
        const resp = await api.post('/', data)
        console.log(resp)
        return resp.data.upload
    } catch (error) {
        console.log(error)
    }
}