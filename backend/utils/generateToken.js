const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d"
    });
    return token;
}

module.exports = generateToken;

