const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/keys");
const requireLogin = require("../../middleware/requireLogin");
const Team = mongoose.model("Team");
const Form = mongoose.model("Form");
const Video = mongoose.model("Video");
router.post("/upload", async (req, res) => {
  const { type, url } = req.body;
  if (!type || !url) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  Video.findOne({ url: url })
    .then((videos) => {
      if (videos) {
        return res.status(422).json({ error: "Video already exists" });
      }
      const videotype = req.body.type.toUpperCase();
      const video = new Video({
        type: videotype,
        url,
      });

      video
        .save()
        .then((video) => {
          res.json({ message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find().sort({ date: -1 });
    res.json(videos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
