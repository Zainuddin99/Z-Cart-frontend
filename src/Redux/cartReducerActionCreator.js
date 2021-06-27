export const addItemsToCart = (item) =>{
    return{
        type: 'ADD ITEMS TO CART',
        payload: item
    }
}

export const deleterCartItem = (id) =>{
    return {
        type: 'DELETE CART ITEM',
        payload:id
    }
}

export const updateStoredCart = (cart) =>{
    return {
        type: 'UPDATE STORED CARTS',
        payload:cart
    }
}