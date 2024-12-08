const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  console.log("Welcome on the user section");
  res.sendFile(path.join(__dirname, "../pages", "user.html"));
});

router.get("/user-profile", (req, res) => {
  res.send("User profile page");
});

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
