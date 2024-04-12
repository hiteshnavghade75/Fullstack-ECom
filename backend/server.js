const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes')

const connectToMongoDB = require('./db/connection');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

const PORT = process.env.PORT || 5000; 

app.get('/', (req,res) => {
    res.send("Welcome...")
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`app listening on port ${PORT}`)
});