const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
    },
    productImage : {
        type : String,
    },
    price : {
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
}, {timestamps : true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;