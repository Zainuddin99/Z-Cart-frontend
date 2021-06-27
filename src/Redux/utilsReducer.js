const initialState = {
    pageActive:{dailyEssential:'', homeFurnitures:''}
}

export const utilsReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'SWITCH TO PAGE':
            if(action.payload === "products"){
                return {dailyEssential:'active', homeFurnitures:''}
            }
            if(action.payload === 'furnitures'){
                return {dailyEssential:'', homeFurnitures:'active'}
            }
            return {dailyEssential:'', homeFurnitures:''}
        default:return state
    }
}