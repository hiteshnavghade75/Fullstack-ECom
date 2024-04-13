const express = require('express');
const {addProduct, updateProduct, getAllProducts} = require('../controllers/product.controller');
const router = express.Router();

router.use('/images', express.static("backend/uploads"));

router.get('/', getAllProducts)

router.post('/add', addProduct);

router.post('/update/:id', updateProduct);

module.exports = router ;