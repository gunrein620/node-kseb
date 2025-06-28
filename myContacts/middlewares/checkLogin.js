const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

const checkLogin = async (req, res, next) => {
  res.setHeader("Cache-control", "no-Cache","no-store","must-revalidate");
  // 쿠키에서 토큰 가져오기
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/");
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.username = decoded.username;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({message: "로그인 필요한 페이지 입니다"});
    return;
  }
};

module.exports = checkLogin;