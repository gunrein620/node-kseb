const express = require("express");
const fs =require("fs")

const app = express();
const port = 3000;

// 초기화면
app.get("/",(req, res)=> {
  res.status(200);
  // res.send("Hello express Node");
  res.json("json text");
  // const headers = req.headers;
  // res.send(headers);
})

// 모든 연락처 가져오기
app.get("/contacts", (req, res)=> {
  res.status(200)
  res.sendFile(__dirname + "/assets/contact.html") // 파일의 내용을 보내기
  // .send("Contacts page")
  fs
})

// id의 연락처 가져오기
app.get("/contacts/:id", (req, res)=> {
  res
  .status(200)
  .send("Contacts 1page")
})


// 연락처 추가하기 
app.post("/contacts",(req, res) => {
  res
  .status(200)
  .send("creat Contacts");
})

// 연락처 수정하기 
app.put("/contacts", (req, res) => {
  const params = req.params;
  console.log(params.id);
  res.status(200).send(params)
})

// 연락처 삭제
app.delete("/contacts", (req, res) => {
  res.status(200).send("Delete Contact")
})



// 서버 실행
app.listen(port,()=> {
  console.log(`${port}번 포트에서 서버실행중`);
})