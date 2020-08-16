const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const teamSchema = new mongoose.Schema({
  student1: {
    type: ObjectId,
    ref: "users",
  },
  student2: {
    type: ObjectId,
    ref: "users",
  },

});

mongoose.model("Team", teamSchema);
