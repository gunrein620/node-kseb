const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser()); // 쿠키 사용하겠다

app.get("/", (req,res) => {
  res.cookie("kim", "1234", {httpOnly: true});
  res.send("쿠키 생성");
});

app.get("/cookie", (req,res) => {
  console.log(req.cookies);
})

app.get("/delete-cookie", (req,res) =>{
  res.clearCookie("Kim");
  res.send("삭제")
})

app.listen(8000, () => {
  console.log("서버 실행중");
});

// local:8000 

//local:8000/cookie 생성

//local:8000/delete-cookie 삭제 