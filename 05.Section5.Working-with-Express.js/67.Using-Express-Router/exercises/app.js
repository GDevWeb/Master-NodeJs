const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const userRoutes = require("./routes/users/users");
const productRoutes = require("./routes/products/products");

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
  console.error(`404 Error: ${req.url} not found`);
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
