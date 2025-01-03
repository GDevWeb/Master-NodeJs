const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Route to fetch all products
router.get("/", productController.getProducts);

// Route to fetch a single product by ID
router.get("/:id", productController.getProductById);

// Route to create a new product
router.post("/", productController.createProduct);

// Route to delete a product by ID
router.post("/:id/update", productController.updateProduct);

// Route to update a product by ID
router.post("/:id/delete", productController.deleteProduct);

module.exports = router;
