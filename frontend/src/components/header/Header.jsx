import React from 'react'
import logo from '../../assets/logo-ecom.png'
import SearchBar from './SearchBar'
import Profile from './Profile'
import Cart from './Cart'
import './Header.css'
import { Link } from 'react-router-dom';
import ProductAdd from './ProductAdd'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={logo} alt="logo" className="h-full" />
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='profile-cart'>
                <ProductAdd/>
                <Profile />
                <Cart />
                <div className='cart-counter'>
                    0
                </div>
            </div>
        </div>
    )
}

export default Header