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

const PORT = process.env.PORT || 5000; 

app.use('/images', express.static("backend/uploads"));
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartProductRoutes);

const buildPath = path.resolve(__dirname, '..', 'frontend', 'dist');

app.use(express.static(buildPath));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`app listening on port ${PORT}`)
});