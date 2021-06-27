const initialState = {
    items:[],
    numberOfItems: 0,
    total:60
}

export const cartReducer = (state = initialState, action) =>{
    switch(action.type){

        case 'ADD ITEMS TO CART':
        const sameItem = state.items.find((item)=>item.id===action.payload.id)
        if(sameItem){
            const updatedItem = state.items.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item, cart:item.cart+action.payload.cart}
                }
                return item
            })
            return {...state, items:updatedItem,
                numberOfItems:state.numberOfItems+action.payload.cart, 
            total:state.total+(action.payload.cart*action.payload.price)}
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        return{
            ...state, items:[...state.items, action.payload], 
            numberOfItems:state.numberOfItems+action.payload.cart,
            total:state.total+(action.payload.cart*action.payload.price)
        }

        case 'DELETE CART ITEM': 
        const deletingItem = state.items.find((item)=>item.id === action.payload)
        const updatedList = state.items.filter((item)=>item.id !== action.payload)
        return {...state, items:updatedList, numberOfItems:state.numberOfItems - deletingItem.cart,
                total:state.total-(deletingItem.cart * deletingItem.price)}

        case 'UPDATE STORED CARTS':
            return {...state, items: action.payload.items,
            numberOfItems: action.payload.numberOfItems,
            total: action.payload.total}

        default: return state
    }
}