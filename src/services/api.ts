import axios from 'axios'

export const jsonServerApi = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
