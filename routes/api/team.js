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

router.get("/teams", async (req, res) => {
  try {
    const teams = await Team.find().sort({ date: -1 });
    res.json(teams);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/team/:id", async (req, res) => {
  Team.findOne({ _id: req.params.id })
    .then((team) => {
      res.json({ team });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ error: "team not found" });
    });
});

module.exports = router;
