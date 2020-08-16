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
   const {  } = req.body;
   let fields = [];
  
   const multerStorage = multer.memoryStorage();

   const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith("image")) {
      cb(null, true);
   } else {
      cb(null, false);
   }
   };

   const upload = multer({
   storage: multerStorage,
   fileFilter: multerFilter,
   });

   upload.fields([
      { name: "photo", maxCount: 1 },
   ]);

   req.body.photo = "default.jpg";

   if(req.files){
      req.body.photo = `eval-${teamName}-${Date.now()}.jpeg`;

      await sharp(req.files.photo[0].buffer)
         .toFormat("jpeg")
         .jpeg({ quality: 90 })
         .toFile(`client/public/evalImages/${req.body.photo}`);
   }

   const form = new Form({
      photo: req.body.photo,
      classPresence: 8,
      initiative: 8,
      mentoring: 8,
      confidence: 8,
      leadership: 8,
      subject: "PE"
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
