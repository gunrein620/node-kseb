// 스키마 정의
const mongoose = require("mongoose");

// contacts schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required:[true,"전화번호는 꼭 기입"]
  },
},
{
  timestamps: true // 마지막 접근시간
})

//const Contact = mongoose.model("Contact", contactSchema)
// module.export = Contact; //아래와 같은 거임

module.exports = mongoose.model("Contact", contactSchema) // 스키마 to 모델

