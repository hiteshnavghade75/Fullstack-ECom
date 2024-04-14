const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
      if (!req.headers.authorization) {
        return res.status(401).json({ message: "Not Found" });
      }
  
      const token = req.headers.authorization;
      const verifiedToken = jwt.verify(token, "0KSwzMG0L9LMVmee4yC8LB7EOWCo73vlmn//D8uepRY=", (err, payload) => {
        if (err) {
          return res.status(401).json({ message: "You must log in" });
        }
        req.userId = payload.userId;
      });
      next();

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Authorization failed" });
    }
  };
