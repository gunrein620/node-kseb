const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

// Register GET
const getRegister = (req, res) =>{
  res.render("register");
};

// Register POST
const registerAdmin = asyncHandler(async (req, res) =>{
  const {username, password, password2} = req.body;
  console.log(req.body);
  if (password == password2) {
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 암호화
    // 이름과 암호화된 비밀번호 DB에 저장
    const user = await Admin.create({username, password:hashedPassword});
    res.status(201).json({message: "Register sucessful", user});
  } else {
    console.log("Failed");
    res.send("Register password not same");
  }
});

// login page : GET
const getLogin = (req, res) => {
  res.render("home");
};

// login check POST
const loginUser = asyncHandler( async (req,res) => {
  const {username, password } = req.body;

  // db에서 검색-> username
  const user = await Admin.findOne({username});
  if (!user){
    return res.status(401).json({message: "일치하는 사용자 없음"});
  }

  // 입력된 비밀번호와 사용자의 비밀번호 비교
  const isMatch = await bcrypt.compare(password,user.password );
  if (!isMatch) {
    return res.status(401).json({message: "비밀번호 일치하지 않음"});
  }
  // 사용자 ID를 기반으로 JWT 토큰 생성
  const token = jwt.sign({id:user._id}, jwtSecret);

  // 생성된 토큰을 쿠키에 저장
  res.cookie("token", token, {httpOnly: true});
  res.redirect("/contacts");
  // if (username == 'admin' && password == '1234'){
  //   res.redirect("/contacts");
  // } else {
  //   res.send("Login Failed");
  // }

});

module.exports = { getLogin, loginUser, getRegister, registerAdmin};