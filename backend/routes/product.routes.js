const express = require('express');
const {addProduct, updateProduct, getAllProducts, getProductById, deleteProduct, searchProducts} = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getAllProducts)

router.get('/v1/search', searchProducts)

router.get('/:id', getProductById)

router.post('/add', addProduct);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct)

module.exports = router ;