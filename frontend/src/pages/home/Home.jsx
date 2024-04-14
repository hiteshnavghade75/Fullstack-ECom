import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';
import Header from '../../components/header/Header';
import Card from '../../components/homepage/Card';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/product", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => { setProducts(data) })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const userString = localStorage.getItem('app-user');
  const user = JSON.parse(userString);

  const handleAddToCart = async (productId) => {
    console.log(productId);
    try {
      await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          Authorization: user.token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
      });

      navigate('/cart');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  console.log(searchResults)
  return (
    <div className='homepage-container'>
      <Header onSearch={handleSearch} />

      <div className='card-holder'>
        {searchResults.length > 0 ? (
          searchResults.map((el) => (
            <Card
              productImage={el.productImage}
              productId={el._id}
              productName={el.productName}
              price={el.price}
              description={el.description}
              key={el._id}
              handleAddToCart={handleAddToCart}
            />
          ))
        ) : (
          products.map((el) => (
            <Card
              productImage={el.productImage}
              productId={el._id}
              productName={el.productName}
              price={el.price}
              description={el.description}
              key={el._id}
              handleAddToCart={handleAddToCart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
