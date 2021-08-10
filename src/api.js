const axios = require('axios')
require('dotenv').config()

let URL

if(process.env.NODE_ENV === 'production'){
    URL = 'https://z-cart.herokuapp.com'
}else{
    URL = 'http://localhost:5000'
}

const API = axios.create({baseURL: URL})

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

export const addItemsToCartAPI = (data) => API.post('/carts/add', data)

export const getCartItemsAPI = () => API.get('/carts')

export const deleteCartItemAPI = (id) => API.patch('/carts/'+id)