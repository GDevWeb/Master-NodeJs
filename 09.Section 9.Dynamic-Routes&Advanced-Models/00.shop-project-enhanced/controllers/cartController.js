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
    const sort = req.query.sort; //
    let cart = await Cart.getCart();

    if (sort === "asc") {
      cart.products.sort((a, b) => a.id - b.id);
    } else if (sort === "desc") {
      cart.products.sort((a, b) => b.id - a.id);
    }
    res.render("shop/cart", { title: "Your cart", cart });
  } catch (error) {
    res.status(500).send("Error loading cart");
  }
};
