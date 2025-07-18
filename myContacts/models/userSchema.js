//User Schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required: true,
    },
    age:{
      type: Number,
    },
    email: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model("User", userSchema);