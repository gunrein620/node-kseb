const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//사용자 스키마 설정
const adminSchema = new Schema(
  {
    username:{
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  }
);

module.exports = mongoose.model("Admin", adminSchema)