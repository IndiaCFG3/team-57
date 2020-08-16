const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const teamSchema=new mongoose.Schema({
   name1:{
       type: String,
       required: true
   },
   name2:{
       type: String,
       required: true
   },
   



  });
  
   mongoose.model("Team", teamSchema);
  