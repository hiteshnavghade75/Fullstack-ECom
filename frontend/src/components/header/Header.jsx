import React from 'react';
import logo from '../../assets/logo-ecom.png';
import SearchBar from './SearchBar';
import Profile from './Profile';
import ProductAdd from './ProductAdd'
import Cart from './Cart';
import './Header.css';
import useHandleSearch from '../../hooks/useHandleSearch';

const Header = ({ onSearch }) => {
    const { search } = useHandleSearch();

    const handleSearch = (searchKeyword) => {
        search(searchKeyword);
    };

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={logo} alt="logo" className="h-full" />
            </div>
            <div>
                <SearchBar onSearch={onSearch} handleSearch={handleSearch} />
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
    );
};

export default Header;
