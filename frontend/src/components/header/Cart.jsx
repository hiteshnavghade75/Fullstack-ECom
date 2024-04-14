import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { PiShoppingCartThin } from "react-icons/pi";

const Cart = () => {
    const navigate = useNavigate()
    return (
        <div className="profile-container" onClick={() => navigate('/cart')}>
            <PiShoppingCartThin className='cart-icon' />
            <span className='cart-text'>
                Cart
            </span>
        </div>
    )
}

export default Cart