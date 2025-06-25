const { json } = require("body-parser");
const express = require("express");

const app = express(); //express 인스턴스
const port = 3000;

app.use(express,json()); //json 파싱
app.use(express.urlencoded({extended:true})); // ?a=10 etc.  파싱

app.use(경로, 라우터);// 라우터 따로 관리
app.use(에러);// 에러 미들웨어로 관리

// 서버실행 
app.listen(port, ()=>{
  console.log(`${port}포트에서 서버실행`);
})

// 에러처리 미들웨어
// app.get("/test",(req, res, next) => {
//   const err = new Error("테스트용 에러, 이곳은 미들웨어"); // 오류생성
//   err.status = 401;
//   next(err);
// })