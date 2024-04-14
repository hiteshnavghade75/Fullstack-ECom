import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import './ViewProduct.css';
import Header from '../../components/header/Header';

const ViewProduct = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/product/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => { setProduct(data) })
    }, [])

    const handleDelete = async () => {
        await fetch(`http://localhost:5000/api/product/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        navigate('/')
    }

    return (
        <div className='view-page'>
            <Header />
            <div className='viewproduct-container'>
                <div className='view-product-image-container'>
                    <img src={product.productImage && `http://localhost:5000/images/${product.productImage}`} alt='thumbnail' />
                </div>
                <div className='product-info'>
                    <h1>{product.productName}</h1>
                    <h4>{product.description}</h4>
                    <p className="price-container">
                        <span className="rupee-symbol">₹ </span>
                        {product.price}
                    </p>
                    <div className="view-button-container">
                        <Link to={`/product/update/${id}`} >
                            <button className="viewproduct-buttons">
                                Update
                            </button>
                        </Link>
                        <button className="viewproduct-buttons" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                    <div className='description-container'>
                        <h5>Description : -</h5>
                        <p>
                            Discover curated items for every occasion. From tech gadgets to trendy fashion,
                            find quality products at unbeatable prices. Shop now and elevate your lifestyle!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct