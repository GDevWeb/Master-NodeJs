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

// Display product details by ID
exports.getProductDetail = async (req, res) => {
  try {
    const productId = req.params.id;

    if (isNaN(productId)) {
      return res.status(400).send("Invalid product ID");
    }

    const product = await Product.findById(productId);

    if (product) {
      res.render("shop/product-detail", { title: "Product Detail", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching product details");
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
    const productID = req.params.id;
    console.log(typeof productID); //
    const product = await Product.findById(productID);

    if (product) {
      res.render("shop/edit-product", { title: "Edit Product", product });
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send("Error loading product");
  }
};
