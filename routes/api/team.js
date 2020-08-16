const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/keys");
const requireLogin = require("../../middleware/requireLogin");
const Team = mongoose.model("Team");
router.post("/maketeam", async (req, res) => {
  const { teamName, name1, name2 } = req.body;
  let fields = [];
  await User.findOne({ name: name1 }).then((user) => {
    if (!user) {
      return res.json("no user found");
    } else {
      fields.push(user._id);
    }
  });
  await User.findOne({ name: name2 }).then((user) => {
    if (!user) {
      return res.json("no user found");
    } else {
      fields.push(user._id);
    }
  });
  const team = new Team({
    name: teamName,
    student1: fields[0],
    student2: fields[1],
  });
  team
    .save()
    .then(res.json({ message: "Saved team" }))
    .catch((err) => console.log(err));
});

module.exports = router;
