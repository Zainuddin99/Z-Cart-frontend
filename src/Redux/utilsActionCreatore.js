import { signIn, signUp } from "../api"
const axios = require('axios')

export const switchToPage = (page) =>{
    return {
        type: 'SWITCH TO PAGE',
        payload:page
    }
}

const startLoading = () =>{
    return {
        type: 'START LOADING',
    }
}

const stopLoading = () =>{
    return {
        type: 'STOP LOADING'
    }
}

const handleError = (message) =>{
    return {
        type: 'HANDLE ERROR',
        payload: message
    }
}

export const openModal = (content) =>{
    return {
        type: 'OPEN MODAL',
        payload: content
    }
}

export const closeModal = () =>{
    return {
        type: 'CLOSE MODAL'
    }
}



export const handleSubmitSign = (data, type) =>{
    return async(dispatch) =>{

        const signAfterTasks = (modalMessage) =>{
    dispatch(stopLoading())
        dispatch(openModal(modalMessage))
        window.history.back()
        }

        dispatch(startLoading())

        try{
        if(type === 'signin'){
        await signIn(data)
        signAfterTasks('Successfully logged in')
        }else{
            await signUp(data)
            signAfterTasks('Successfully signed in')
        }
        }catch(err){
            dispatch(handleError(err?.response?.data?.message))
        }
    }
}

export const clearErrorMessage = () =>{
    return {
        type: 'CLEAR ERROR'
    }
}