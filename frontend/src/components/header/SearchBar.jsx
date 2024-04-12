import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='searchbar-container'>
            <input type='text' placeholder='Search for products' />
            <button className='search-button' type='submit' >Search</button>
        </div>
    )
}

export default SearchBar