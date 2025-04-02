import axios from "axios";



export const PostApi = axios.create({
    baseURL:'http://localhost:8080/api/posts'
})