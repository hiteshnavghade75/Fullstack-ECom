import React, { useState } from 'react'
import Header from '../../components/header/Header';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('productName', formData.productName);
    formDataToSend.append('productImage', formData.image);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);

    try {
      const response = await fetch('http://localhost:5000/api/product/add', {
        method: 'POST',
        body: formDataToSend
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <Header/>
      <div className="signup-container">
        <div className="form-container">

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="form-input"
              value={formData.productName}
              onChange={handleChange}
            />

            <label htmlFor="productImage">Upload Image </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              className="form-input"
              placeholder=''
              onChange={handleImageChange}
            />

            <label htmlFor="price">Price</label>
            <div className="password-container">
              <input
                id="price"
                name="price"
                className="form-input"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="description">Description</label>
            <div className="password-container">
              <input
                id="description"
                name="description"
                className="form-input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button className="signup-btn" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;

