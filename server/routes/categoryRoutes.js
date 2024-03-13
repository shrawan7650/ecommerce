const express = require("express");
const { isAdmin, requiredVerified } = require("../middlerwares/authMiddleWere.js");
const {
  findcategoryControlller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} = require("../controllers/CategoryControllers");

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requiredVerified,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requiredVerified,
  isAdmin,
  updateCategoryController
);

//getAll category
router.get("/get-category", findcategoryControlller);

//single category
router.get("/single-category/:id", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requiredVerified,
  isAdmin,
  deleteCategoryController
);

module.exports = router;
