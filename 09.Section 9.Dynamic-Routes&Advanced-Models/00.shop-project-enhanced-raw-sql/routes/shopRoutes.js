const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// Route to display the shop
router.get("/", shopController.getShop);

// Route to display product details by ID
router.get("/products/:id", shopController.getProductDetail);

// Route to display the add product form
router.get("/add-product", shopController.getAddProduct);

// Route to display the edit product form
router.get("/edit-product/:id", shopController.getEditProduct);

// Route to delete product by id
router.delete("/edit-product/:id", shopController.getEditProduct);

module.exports = router;
