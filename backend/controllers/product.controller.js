const multer = require("multer");
const Product = require("../models/product.model");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("productImage");

const addProduct = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "Error uploading file" });
      }

      const { productName, price, description } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const newProduct = new Product({
        productName: productName,
        productImage: req.file.filename,
        price: price,
        description: description,
      });

      await newProduct.save();

      res
        .status(201)
        .json({ message: "Product created successfully", product: newProduct });
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.query;

    const searchFields = ['productName'];

    const query = {
      $or: searchFields.map(field => ({ [field]: { $regex: new RegExp(keyword, 'i') } }))
    };

    const products = await Product.find(query);

    res.json({ data: products });
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const updateProduct = async (req, res) => {
  try {
    upload(req, res, async function (err) {
      if (err) {
        console.error("Error uploading file:", err);
        return res.status(500).json({ error: "Error uploading file" });
      }

      const { productName, price, description } = req.body;
      const productId = req.params.id;

      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      product.productName = productName;
      product.price = price;
      product.description = description;

      if (req.file) {
        product.productImage = req.file.filename;
      }

      const updatedProduct = await product.save();
      res.status(200).json({
        status: "success",
        result: updatedProduct,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to update product details" });
  }
};

const deleteProduct = async (req,res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
        message: "Product deleted successfully"
      });
    } else {
      res.status(404).json({
        message: "Product not found"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete product" });
  }
}


module.exports = { addProduct, updateProduct, getAllProducts, getProductById, deleteProduct, searchProducts };
