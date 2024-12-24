const Cart = require("../models/Cart");

exports.addToCart = (req, res) => {
  const productId = req.body.productId;

  Cart.addProduct(productId);
  res.redirect("/cart");
};

exports.removeFromCart = async (req, res) => {
  const productId = req.body.productId;
  await Cart.removeProduct(productId);
  res.redirect("/cart");
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.getCart();
    res.render("shop/cart", { title: "Your cart", cart });
  } catch (error) {
    res.status(500).send("Error loading cart");
  }
};
