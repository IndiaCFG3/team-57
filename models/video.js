const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const VideoSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Video", VideoSchema);
