const express = require('express');
const path = require('path')
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes')
const cartProductRoutes = require('./routes/cartProduct.routes')

const connectToMongoDB = require('./db/connection');

const app = express();

app.use('/images', express.static("backend/uploads"));
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartProductRoutes);

const PORT = process.env.PORT || 5000; 

app.get('/', (req,res) => {
    res.send("Welcome...")
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`app listening on port ${PORT}`)
});