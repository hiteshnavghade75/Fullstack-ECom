import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: '',
        price: '',
        description: '',
        productImage: null
    });

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log(error));
    }, [id]);

    useEffect(() => {
        if (product) {
            const { productName, productImage, price, description } = product;
            setFormData({ productName, productImage, price, description });
        }
    }, [product]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageChange = (event) => {
        setFormData({
            ...formData,
            productImage: event.target.files[0],
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedProduct = new FormData();
        updatedProduct.append('productName', formData.productName);
        updatedProduct.append('price', formData.price);
        updatedProduct.append('description', formData.description);
        if (formData.productImage) {
            updatedProduct.append("productImage", formData.productImage);
        }


        fetch(`http://localhost:5000/api/product/update/${id}`, {
            method: "PUT",
            body: updatedProduct,
        })
            .then((response) => response.json())
            .then((data) => {
                navigate(`/product/view/${id}`);
            })
            .catch((error) => console.log(error));
    };


    return (
        <div>
            <div className="signup-container">
                <div className="form-container">

                    <form className="form" onSubmit={handleSubmit} >
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            className="form-input"
                            value={formData.productName || ''}
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
                                value={formData.price || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="description">Description</label>
                        <div className="password-container">
                            <input
                                id="description"
                                name="description"
                                className="form-input"
                                value={formData.description || ''}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="signup-btn" type="submit">
                            Update Product
                        </button>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default UpdateProduct