const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    required: true,
  },
  school: {
    type:String
  },
  standard: {
type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

 mongoose.model("User", UserSchema);
