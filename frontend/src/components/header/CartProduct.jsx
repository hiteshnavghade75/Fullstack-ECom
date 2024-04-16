import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import './CartProduct.css';

const CartProduct = ({ele}) => {

  const userString = localStorage.getItem('app-user');
  const user = JSON.parse(userString);

  return (
    <div className="cart-product">
      <div className="product-image-container">
        <img src={`https://fullstack-ecom.onrender.com/images/${ele.productImage}`} className="product-image" alt="Product" />
      </div>
      <div className="product-details">
        <div className="product-name-container">
          <h3 className="product-name">{ele.productName}</h3>
        </div>
        <p className="product-description">{ele.description}</p>
        <p className="product-price">
          <span className="currency-symbol">₹</span>
          {ele.price}
        </p>
        <div className="quantity-and-total-container">
          <div className="total-label-value">
            <p>Total : </p>
            <p><span className="currency-symbol">₹</span>{ele.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
