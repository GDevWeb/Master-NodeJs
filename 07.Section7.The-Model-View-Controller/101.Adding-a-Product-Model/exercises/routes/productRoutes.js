const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Fetch all products
router.get("/products", productController.getAllProducts);
// Fetch product by id
router.get("/products/:id", productController.getProductById);
// Create an product :
router.post("/products", productController.createProduct);
// Update a product by id
router.put("/products:id", productController.updateProduct);
// Delete a product by Id
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
