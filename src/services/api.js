import axios from "axios";

export const key = '796574843113f70bbaa3720f9c693970f8906b60';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization':`Bearer ${key}`
    }

})

export default api;