const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

// Middleware from express to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/data", (req, res, next) => {
  const jsonData = req.body;
  res.send(`Received JSON data: ${JSON.stringify(jsonData)}`);
  next();
});

app.post("/form", (req, res, next) => {
  const formData = req.body;
  res.send(`Received Form Data: ${JSON.stringify(formData)}`);
  next();
});

app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.end(`Search results for: ${keyword}`);
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
  console.info(`Serve is running on http://localhost:${port}`);
});
