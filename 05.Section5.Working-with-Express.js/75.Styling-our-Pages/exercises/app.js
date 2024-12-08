const express = require("express");
const app = express();
const path = require("path");
const rootDir = require("./utils/pathHelper");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views", "pages")));

const adminRoutes = require("./views/admin/admin");
const userRoutes = require("./views/users/user");

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "pages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "pages", "about.html"));
});

app.use((req, res) => {
  console.error(`404 Error: ${req.url} not found`);
  res.status(404).sendFile(path.join(rootDir, "views", "pages", "404.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/* 
Tests :
// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/user
// http://localhost:3000/user/user-dashboard
// http://localhost:3000/admin
//http://localhost:3000/admin/
//http://localhost:3000/admin/dashboard
//http://localhost:3000/error404
*/
