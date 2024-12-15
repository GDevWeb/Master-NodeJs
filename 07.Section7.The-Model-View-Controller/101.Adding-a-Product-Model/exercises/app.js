const express = require("express");

const productRoutes = require("./routes/productRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome on the homepage");
});

app.listen(port, () => {
  console.info(`Server is running on : "http://localhost:${port}"`);
});
