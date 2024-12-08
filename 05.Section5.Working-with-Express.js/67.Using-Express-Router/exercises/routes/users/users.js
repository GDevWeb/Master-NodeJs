const express = require("express");
const router = express.Router();

const userList = ["Christelle", "Océane", "Annabeth"];

router.get("/", (req, res) => {
  const renderUserList = userList.map((user) => `<li>${user}</li>`).join("");
  res.send(`<ul>${renderUserList}</ul>`);
});

router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (userId >= 0 && userId < userList.length) {
    res.send(`User: ${userList[userId]}`);
  } else {
    res.status(404).send("User not found");
  }
});

module.exports = router;
