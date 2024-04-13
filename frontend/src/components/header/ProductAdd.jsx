import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

const ProductAdd = () => {
    return (
        <div>
            <span>
                <Link to={'product/add'} >
                    <IoIosAddCircleOutline className='add-product-logo' />
                </Link>
                <span className='cart-text'>
                    Add Product
                </span>
            </span>
        </div>
    )
}

export default ProductAdd