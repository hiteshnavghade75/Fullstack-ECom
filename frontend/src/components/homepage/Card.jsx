import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({ productName, productImage, price, description, productId, handleAddToCart }) => {
  const userString = localStorage.getItem('app-user');
  const user = JSON.parse(userString);

  const addToCart = () => {
    console.log(productId)
    handleAddToCart(productId);
  };

  return (
    <div className="card-container">
      {productImage ? (
        <>
          <Link
            to={`/product/view/${productId}`}
            className="thumbnail-link"
          >
            <div className="thumbnail">
              <img src={`http://localhost:5000/images/${productImage}`} alt="thumbnail" className="thumbnail-img" />
            </div>
            <h3 className="product-name">{productName}</h3>
            <p className="product-description">{description}</p>
            <p className="product-price">
              <span className="currency-symbol">₹</span>
              {price}
            </p>
          </Link>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add To Cart
          </button>
        </>
      ) : (
        <div className="loading-placeholder">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Card;

