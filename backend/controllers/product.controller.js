const express = require('express');
const Product = require('../models/product.model');


const addProduct = async (req,res) => {
    try {
          const { productName, productImage, price, description } = req.body;

          const newProduct = new Product({
            productName: productName,
            productImage: productImage,
            price: price,
            description: description
          });

          if(newProduct){
            const savedProduct = await newProduct.save()
            res.status(201).json({ message: 'Product created successfully', product: savedProduct });
          }
  
        } catch (error) {
          console.error('Error creating product:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
  
  };
  
  
  module.exports = {addProduct};
  