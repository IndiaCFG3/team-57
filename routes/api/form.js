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
router.post("/evalForm", async (req, res) => {
  const {classPresence,
    initiative,  mentoring,  confidence,  leadership,  subject,description,studentsPresent} = req.body;
 
 

  const form = new Form({
    
    classPresence,
    initiative,
    mentoring,
    confidence,
    leadership,
    subject,
    studentsPresent,
    description
  });
  form
    .save()
    .then(res.json({ message: "Form saved" }))
    .catch((err) => console.log(err));
});

router.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find().sort({ date: -1 });
    res.json(forms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/form/:id", async (req, res) => {
  Form.findOne({ _id: req.params.id })
    .then((form) => {
      res.json({ form });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).json({ error: "Form not found" });
    });
});

module.exports = router;
