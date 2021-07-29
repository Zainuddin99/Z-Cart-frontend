import { signIn, signUp, verifyToken } from "../api"

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

export const addLoggedUser = (user) =>{
    return {
        type: 'ADD LOGGED USER',
        payload: user
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
        const response = await signIn(data)
        localStorage.setItem("userToken", response.data.userToken)
        signAfterTasks('Successfully logged in')
        dispatch(verifyLoggeduser(response.data.userToken))
        }else{
            await signUp(data)
            signAfterTasks('Successfully signed in')
        }
        }catch(err){
            dispatch(handleError(err?.response?.data?.message))
        }
    }
}

export const verifyLoggeduser = (token) =>{
    return async(dispatch) => {
        try {
            const response = await verifyToken(token)
            dispatch(addLoggedUser(response.data))
        } catch (error) {
        }
    }
}

export const clearErrorMessage = () =>{
    return {
        type: 'CLEAR ERROR'
    }
}

export const logoutUser = () =>{
    return {
        type: 'LOGOUT USER'
    }
}