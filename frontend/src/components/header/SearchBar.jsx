// import React from 'react'
// import './SearchBar.css'

// const SearchBar = () => {
//     return (
//         <div className='searchbar-container'>
//             <input type='text' placeholder='Search for products' />
//             <button className='search-button' type='submit' >Search</button>
//         </div>
//     )
// }

// export default SearchBar


import React, { useState } from 'react';
import './SearchBar.css';
import useHandleSearch from '../../hooks/useHandleSearch';

const SearchBar = () => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const {search} = useHandleSearch()

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        search(searchKeyword);
    };

    return (
        <div className='searchbar-container'>
            <input
                type='text'
                placeholder='Search for products'
                value={searchKeyword}
                onChange={handleChange}
            />
            <button className='search-button' type='submit' onClick={handleSubmit}>Search</button>
        </div>
    );
};

export default SearchBar;
