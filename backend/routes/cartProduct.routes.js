const express = require('express');
const { addToCartProduct, getProductsByUser, deleteFromCart } = require('../controllers/cartProduct.controller');
const router = express.Router();

const middleware = require('../middleware/cart.middleware')

router.post('/', middleware, addToCartProduct);

router.get('/products', middleware, getProductsByUser);

router.delete("/:productId",middleware, deleteFromCart);

module.exports = router ;