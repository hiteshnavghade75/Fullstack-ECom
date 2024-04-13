import React, { useEffect, useState } from 'react';
import './Home.css'
import Header from '../../components/header/Header';
import Card from '../../components/homepage/Card';

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/product", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => { setProducts(data) })
  }, [])

  return (
    <div>
      <Header />
      <h2>Your Products</h2>
      <div className='card-holder'>
      {products.map((el) => {
        return <Card
          productImage={el.productImage}
          id={el._id}
          productName={el.productName}
          price={el.price}
          description={el.description}
          key={el._id}
        />
      })}
      </div>
    </div>
  )
}

export default Home
