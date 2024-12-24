const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

// route to handle adding products to the cart
router.post("/cart", cartController.addToCart);

// route to remove product from cart
router.post("/cart/remove", cartController.removeFromCart);

// View cart
router.get("/cart", cartController.getCart);

module.exports = router;
