function CartManager({number, handleCartNumber, callDispatch}) {

    return (
        <div className="cart-manager">
            <div className="cart-buttons">
                <button onClick={()=>handleCartNumber('sub')}>-</button>
                <p>{number}</p>
                <button onClick={()=>handleCartNumber('add')}>+</button>
            </div>
            <button onClick={callDispatch}>Add to cart</button>
        </div>
    )
}

export default CartManager
