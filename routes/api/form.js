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
const Form = mongoose.model("evalForm");
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
         .toFile(`client/public/evalIamges/${req.body.photo}`);
   }

   const form = new Form({
      photo: req.body.photo
   });
   form
     .save()
     .then(res.json({ message: "Form saved" }))
     .catch((err) => console.log(err));

});

module.exports = router;
