const express = require("express");
const router = express.Router();

const productList = ["Ananas", "Banana", "Clementine"];

router.get("/", (req, res) => {
  const renderProductList = productList
    .map((product) => `<li>${product}</li>`)
    .join("");
  res.send(`<ul>${renderProductList}</ul>`);
});

router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  if (productId >= 0 && productId < productList.length) {
    res.send(`Product: ${productList[productId]}`);
  } else {
    res.status(404).send("Product not found");
  }
});

module.exports = router;
