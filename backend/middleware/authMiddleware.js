const jwt = require("jsonwebtoken");
const userDB = require("../models/userModel.js");
require("dotenv").config;

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify the Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from the token
      req.user = await userDB.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(401).json({ message: "Not Authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
