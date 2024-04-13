import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = ({ productName, productImage, price, description, loading, id }) => {

  return (
    <div className="card-container">
      {productImage ? (
        <>
          <Link
            to={`/product/view/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
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
          <button className="add-to-cart-btn">
            Add To Cart
          </button>
        </>
      ) : (
        <div className="loading-placeholder">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
