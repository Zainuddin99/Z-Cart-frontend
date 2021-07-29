const axios = require('axios')

const API = axios.create({baseURL: 'https://z-cart.herokuapp.com'})

API.interceptors.request.use((req)=>{
    const userToken = localStorage.getItem('userToken')
    if(userToken){
        req.headers.Authorization = `Bearer ${userToken}`
    }
    return req
})

export const signIn = (data) => API.post('/users/signin', data)

export const signUp = (data) => API.post('/users/signup', data)

export const verifyToken = (token) => API.post('/users/verify', {token})