import React, { useEffect, useState } from 'react';
import emptyCart from '../../assets/empty.gif';
import CartProduct from '../../components/header/CartProduct';
import './Cart.css';
import Header from '../../components/header/Header';

const Cart = () => {

  const [products, setProducts] = useState([])
  const userString = localStorage.getItem('app-user');
  const user = JSON.parse(userString);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart/products', {
      method: 'GET',
      headers: {
        Authorization: user.token,
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(data => { setProducts(data) })
  }, [])

  let total_price = 0
  {
    products.map((ele) => {
      total_price += ele.price
    })
  }

  return (
    <>
      <Header />
      {
        products.length ?
          <div className='cart-container'>
            <h2 className='cart-title'>Your Cart</h2>
            <div className='cart-content'>
              <div className='cart-products'>
                {products.map((ele, index) => {
                  return <CartProduct
                    ele={ele}
                    key={index}
                  />
                })}

              </div>
              <div className='cart-summary'>
                <p className='summary-header'>Summary</p>
                <div className='summary-item'>
                  <p>Total Quantity :</p>
                  <p className='summary-value'>{products.length}</p>
                </div>
                <div className='summary-item'>
                  <p>Total Price</p>
                  <p className='summary-value'><span className="price-currency">₹</span>{total_price}</p>
                </div>
                <button className='make-payment-btn'>Checkout</button>
              </div>
            </div>
          </div>
          :
          <div className='empty-cart'>
            <img src={emptyCart} alt='Empty Cart' className='empty-cart-img' />
            <p className='empty-cart-text'>Cart is empty</p>
          </div>
      }

    </>
  );
}

export default Cart;



