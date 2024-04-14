import { useState } from "react";

const useHandleSearch = () => {
    const [searchResults, setSearchResults] = useState([]);

    const search = (searchKeyword) => {
        if (searchKeyword.trim() !== '') {
            const apiUrl = `http://localhost:5000/api/product/v1/search?query=${searchKeyword}`;

            return fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    setSearchResults(data);
                    return data; 
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    };

    return { searchResults, search };
}

export default useHandleSearch;
