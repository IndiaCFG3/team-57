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
   // const formT = new FormData();
   // formT.append("classPresence", 8);
   // formT.append("initiative", 8);
   // formT.append("mentoring", 8);
   // formT.append("confidence", 8);
   // formT.append("leadership", 8);
   // formT.append("subject", "PE");
   //formT.append("photo", req.files.photo[0])
   
   const teamName = "TEAM";
   let fields = [];
  
   const multerStorage = multer.memoryStorage();

   const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith("image")) {
      console.log(file);
      cb(null, true);
   } else {
      cb(null, false);
      console.log(err);
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

   console.log(req.files);

   if(req.files){
      console.log(req.files);
      req.body.photo = `eval-${teamName}-${Date.now()}.jpeg`;

      await sharp(req.files.photo[0].buffer)
         .toFormat("jpeg")
         .jpeg({ quality: 90 })
         .toFile(`client/public/evalImages/${req.body.photo}`);
   }

   const form = new Form();
   form
     .save()
     .then(res.json({ message: "Form saved" }))
     .catch((err) => console.log(err));

});

module.exports = router;
