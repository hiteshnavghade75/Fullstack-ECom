const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');

const connectToMongoDB = require('./db/connection');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000; 

app.get('/', (req,res) => {
    res.send("Welcome...")
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`app listening on port ${PORT}`)
});