const express = require("express");
const path = require("path");
const rootDir = require("../../utils/pathHelper");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Welcome on the user section");
  res.sendFile(path.join(rootDir, "views", "pages", "user.html"));
});

router.get("/user-profile", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "pages", "user-profile.html"));
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
