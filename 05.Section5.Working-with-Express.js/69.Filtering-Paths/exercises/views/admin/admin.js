const express = require("express");
const path = require("path");
const rootDir = require("../../utils/pathHelper"); // Correct path to pathHelper.js
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "pages", "admin.html"));
});

router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "pages", "admin-dashboard.html"));
});

module.exports = router;

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
