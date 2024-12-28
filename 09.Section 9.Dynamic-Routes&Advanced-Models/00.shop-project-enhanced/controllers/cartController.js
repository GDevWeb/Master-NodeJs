const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const productId = req.body.productId;
    if (!productId) {
      return res.status(400).send("Product ID is required.");
    }

    await Cart.addProduct(productId);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Error adding product to cart");
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const productId = req.body.productId;

    if (!productId) {
      return res.status(400).send("Product ID is required.");
    }

    await Cart.removeProduct(productId);
    res.redirect("/cart");
  } catch (error) {
    res.status(500).send("Error removing product from cart");
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.getCartWithDetails();
    res.render("shop/cart", { title: "Your cart", cart: cart || [] });
  } catch (error) {
    res.status(500).send("Error loading cart");
  }
};
