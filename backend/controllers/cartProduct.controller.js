const multer = require('multer');
const CartProduct = require('../models/cartproducts.model');
const mongoose = require('mongoose');

const addToCartProduct = async (req, res) => {
    try {
      const userId = req.userId
        const { productId } = req.body;

        const cartProduct = new CartProduct({
            userId,
            productId
        });

        await cartProduct.save();

        res.status(201).json({ message: "Product added to cart", cartProduct });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getProductsByUser = async (req, res) => {
  try {
    const userId = req.userId;

    const cartProducts = await CartProduct.find({ userId }).populate('productId');

    const products = cartProducts.map(cartProduct => cartProduct.productId);

    res.status(200).json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteFromCart = async (req, res) => {
  try {
    const productId = req.params.productId;

    const validId = mongoose.Types.ObjectId.isValid(productId);
    if (!validId) {
      return res.status(400).json({ error: 'Invalid product ID' });
    }

    const deletedProduct = await CartProduct.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    res.status(200).json({ message: 'Product deleted from cart successfully', deletedProduct });
  } catch (error) {
    console.error('Error deleting product from cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {addToCartProduct, getProductsByUser, deleteFromCart}