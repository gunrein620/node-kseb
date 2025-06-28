const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

//get register
const getRegister = (req, res) => {
  res.render("register");
};

// register POST
const registerAdmin = asyncHandler (async (req, res) => {
  const { username, password, password2} = req.body;
  if(password == password2) {
    //db 저장
    const hashedPassword = await bcrypt.hash(password, 10); // 비밀번호 암호화
    // 이름과 암호화 비밀번호를 저장 
    const user = await Admin.create({username, password: hashedPassword});
    res.status(201).json({messgae:"register sucsessful"});
  } else {
    res.send("비밀번호 일치하지 않음")
  }
  //res.render("register");
})


//login page : GET

const getLogin = (req, res) => {
  res.render("home");
};

// login check POST
const loginUser = asyncHandler( async (req, res) => {
  const { username, password } = req.body;
  const user = await Admin.findOne({ username });
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

  // if(username == 'admin' && password == '1234'){
  //   res.redirect("/contacts")
  // }else {
  //   res.send("fail...")
  // }

  //사용자 아이디 기반 jwet 토큰 생성
})

//logout get
const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
}

module.exports = {getLogin, loginUser,getRegister, registerAdmin, logout};