const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000; 

app.get('/', (req,res) => {
    res.send("Welcome...")
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
});