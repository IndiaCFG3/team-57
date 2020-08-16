const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const formSchema = new mongoose.Schema({
  team: {
    type: ObjectId,
    ref: "Team",
    
  },
  
  classPresence: {
    type: Number,
    required: true,
  },
  initiative: {
    type: Number,
    required: true,
  },
  mentoring: {
    type: Number,
    required: true,
  },
  leadership: {
    type: Number,
    required: true,
  },
  confidence: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  subject: {
    type: String,
    required: true,
  },
  studentsPresent: {
    type: Number,
    required: true,
  },
});

mongoose.model("Form", formSchema);
