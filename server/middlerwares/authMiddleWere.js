var JWT = require('jsonwebtoken');
const User = require("../models/userModel");

//user accesss
const requiredVerified = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const decode = await JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

//admin accesss
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.role !== 1) {
      return res.status(401).json({
        success: false,
        message: "You are not admin",
      });
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({
      success: false,
      err: err.message,
    });
  }
};
module.exports = {
  requiredVerified,
  isAdmin,
};
