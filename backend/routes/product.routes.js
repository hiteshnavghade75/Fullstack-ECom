const express = require('express');
const {addProduct, updateProduct, getAllProducts, getProductById, deleteProduct} = require('../controllers/product.controller');
const router = express.Router();

router.get('/', getAllProducts)

router.get('/:id', getProductById)

router.post('/add', addProduct);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct)

module.exports = router ;