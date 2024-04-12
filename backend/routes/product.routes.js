const express = require('express');
const {addProduct} = require('../controllers/product.controller');
const upload = require('../middleware/multerMiddleware');
const router = express.Router();

router.use('/images', express.static("uploads"));

router.post('/add',upload.single('productImage'), addProduct);

module.exports = router ;