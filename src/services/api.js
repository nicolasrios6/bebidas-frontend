import axios from "axios";

const BASE_URL = 'http://localhost:8080'

const api = axios.create({
    baseURL:BASE_URL
})

export default api