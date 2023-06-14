import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.css'
const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    
    return(
        <Link className='cartColour' to='/cart'>
            <ion-icon name="cart-outline"></ion-icon>
            {totalQuantity()}
        </Link>
    )
}

export default CartWidget 