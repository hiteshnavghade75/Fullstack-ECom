import React from 'react';
import './Cart.css'
import { PiShoppingCartThin } from "react-icons/pi";

const Cart = () => {
    return (
        <div className="profile-container">
            <PiShoppingCartThin className='cart-icon' />
            <span className='cart-text'>
                Cart
            </span>
        </div>
    )
}

export default Cart