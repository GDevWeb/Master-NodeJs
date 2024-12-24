const express = require("express");
const path = require("path");

const productRoutes = require("./routes/productRoutes");
const shopRoutes = require("./routes/shopRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();
const port = 3000;

// Set the view engine (Pug in this example)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", shopRoutes);
app.use("/products", productRoutes);
app.use("/", cartRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
