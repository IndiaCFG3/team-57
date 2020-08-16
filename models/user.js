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
  resetToken: String,
  expireToken: String,
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png",
  },
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
  date: {
    type: Date,
    default: Date.now
  }
});

 mongoose.model("User", UserSchema);
