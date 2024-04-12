import React from 'react'
import logo from '../../assets/logo-ecom.png'
import SearchBar from './SearchBar'
import Profile from './Profile'
import Cart from './Cart'
import './Header.css'

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
                <Profile />
                <Cart />
            </div>
        </div>
    )
}

export default Header