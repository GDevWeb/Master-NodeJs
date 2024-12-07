const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

app.use("/", (req, res, next) => {
  res.send("This always runs!");
  next();
});

app.use("/blog", (req, res, next) => {
  res.send("Welcome on the blog page Powered by Express.js");
});

app.use("/", (req, res, next) => {
  res.send("Welcome on the homePage Powered by Express.js");
});

app.listen(port, () => {
  console.info(`The server running on http://localhost:${port}`);
});
