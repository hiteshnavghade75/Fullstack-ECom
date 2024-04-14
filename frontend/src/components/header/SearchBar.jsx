import React, { useState } from 'react';
import './SearchBar.css';
import useHandleSearch from '../../hooks/useHandleSearch';

const SearchBar = ({onSearch}) => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [results, setResults] = useState([])
    const {search} = useHandleSearch()

    const handleChange = (event) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        search(searchKeyword)
        .then((data )=> {
            setResults(data)
        })
        console.log(results)
        onSearch(results)
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
