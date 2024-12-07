/* Exercise 2 */
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Exercise 2 - Time to practice Express.js");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
