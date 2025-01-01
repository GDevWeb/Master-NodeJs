const fs = require("fs").promises;
const path = require("path");
const Product = require("./Product");

const cartPath = path.join(__dirname, "../data/cart.json");

class Cart {
  // Add a product to the cart
  static async addProduct(productId) {
    try {
      let cart = { products: [] };

      // Read existing cart data
      try {
        const data = await fs.readFile(cartPath, "utf-8");
        cart = JSON.parse(data);
      } catch (err) {
        console.log("No existing cart found, creating a new one.");
      }

      const product = await Product.findById(productId);

      if (!product) {
        console.log(`Product with Id ${productId} does not exist`);
        return;
      }

      // Find if the product is already in the cart
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === productId.toString()
      );

      if (existingProductIndex !== -1) {
        // Increment quantity if product exists
        cart.products[existingProductIndex].quantity += 1;
      } else {
        // Add new product with quantity 1
        cart.products.push({ id: productId, quantity: 1 });
      }

      // Save the updated cart data
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  }

  // Remove a product from the cart
  static async removeProduct(productId) {
    try {
      let cart = { products: [] };

      // Read existing cart data
      try {
        const data = await fs.readFile(cartPath, "utf-8");
        cart = JSON.parse(data);
      } catch (err) {
        console.log("No existing cart found, creating a new one.");
      }

      // Filter out the product to be removed
      const updatedProducts = cart.products.filter(
        (prod) => prod.id !== productId
      );

      cart.products = updatedProducts;

      // Save the updated cart data
      await fs.writeFile(cartPath, JSON.stringify(cart, null, 2));
    } catch (err) {
      console.error("Error removing product from cart:", err);
    }
  }

  static async getCart() {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      return JSON.parse(data);
    } catch (err) {
      console.error("Error reading cart data:", err);
      return { products: [] };
    }
  }

  static async getCartWithDetails() {
    try {
      const data = await fs.readFile(cartPath, "utf-8");
      const cart = JSON.parse(data);

      // Use Promise.all to fetch all product details in parallel
      const detailedCart = await Promise.all(
        cart.products.map(async (item) => {
          const product = await Product.findById(item.id);
          if (product) {
            return {
              ...product,
              quantity: item.quantity,
            };
          }
          return null;
        })
      );

      // Filter out any null entries (in case some products are not found)
      return detailedCart.filter((item) => item !== null);
    } catch (err) {
      console.error("Error fetching cart details:", err);
      return [];
    }
  }
}

module.exports = Cart;
