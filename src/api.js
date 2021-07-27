const axios = require('axios')

const API = axios.create({baseURL: 'http://localhost:5000'})

export const signIn = (data) => API.post('/users/signin', data)

export const signUp = (data) => API.post('/users/signup', data)