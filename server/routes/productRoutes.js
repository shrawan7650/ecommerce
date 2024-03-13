// import formidable from "express-formidable";
const formidable = require("express-formidable");

const {
  isAdmin,
  requiredVerified,
} = require("../middlerwares/authMiddleWere.js");

const express = require("express");
const router = express.Router();

const {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} = require("../controllers/productController");

//routes
router.post(
  "/create-product",
  requiredVerified,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:id",
  requiredVerified,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:id", getSingleProductController);

//get photo
router.get("/product-photo/:id", productPhotoController);

//delete rproduct
router.delete("/delete-product/:id", deleteProductController);

module.exports = router;
