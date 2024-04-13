const multer = require('multer');
const Product = require('../models/product.model');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('productImage');

const addProduct = async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err) {
          console.error('Error uploading file:', err);
          return res.status(500).json({ error: 'Error uploading file' });
        }
  
        const { productName, price, description } = req.body;
  
        if (!req.file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }
  
        const newProduct = new Product({
          productName: productName,
          productImage: req.file.path,
          price: price,
          description: description
        });
  
        await newProduct.save();
  
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
      });
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


  const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
          product.productName = req.body.productName;
          product.price = req.body.price;
          product.description = req.body.description;

    
          if (req.file) {
            product.productImage = req.file.originalname;
          }
    
          const updatedProduct = await product.save();
          res.status(200).json({
            status: "success",
            result: updatedProduct
          });
        } else {
          res.status(404).json({
            message: "Product not found"
          });
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to update product details" });
      }
  }
  
  module.exports = {addProduct, updateProduct, getAllProducts};
  