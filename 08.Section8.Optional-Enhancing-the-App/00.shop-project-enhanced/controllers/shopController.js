const Product = require("../models/Product");

// Render the main shop page
exports.getShop = async (req, res) => {
  try {
    const products = await Product.fetchAll();
    res.render("shop/index", { title: "Shop", products, activePage: "home" });
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
};

exports.getAddProduct = (req, res) => {
  res.render("shop/add-product", {
    title: "Add Product",
    activePage: "add-product",
  });
};

// Display the edit product form by ID
exports.getEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.render("shop/edit-product", { title: "Edit Product", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching product");
  }
};
