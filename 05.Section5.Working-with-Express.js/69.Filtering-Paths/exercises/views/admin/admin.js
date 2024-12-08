const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("Admin middleware executed");
  res.sendFile(path.join(__dirname, "../pages", "admin.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages", "admin-dashboard.html"));
});

router.get("/:adminId", (req, res) => {
  const adminId = req.params.adminId;
  res.send(`Admin ID: ${adminId}`);
});
// http://localhost:3000/admin/GDevWeb //Admin ID: GDevWeb

module.exports = router;

/* 
Tests :
// http://localhost:3000/user
// http://localhost:3000/user/user-dashboard
// http://localhost:3000/admin
//http://localhost:3000/admin/
//http://localhost:3000/admin/dashboard
//http://localhost:3000/error404
*/
