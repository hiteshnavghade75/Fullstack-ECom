const mongoose = require('mongoose');

const cartProductSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
}, { timestamps: true });

const CartProduct = mongoose.model("CartProduct", cartProductSchema);

module.exports = CartProduct;
