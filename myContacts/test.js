const express = require("express");
const fs =require("fs")

const app = express();
const port = 3000;

// 초기화면
app.get("/",(req, res)=> {
  res.status(200);
  res.send("welcome")
})

app.get("/list", (req, res)=> {
  res.status(200);
  res.sendFile(__dirname + "/assets/index.html");
})

app.put("/update/:id", (req, res) => {
  const method = req.method;
  console.log(method);
  const {id} = req.params;
  res.status(200);
  res.send(`${id} 자료수정`)
}) 

// app.put("/list/:id", (req, res) => {
//   const {id} = req.params;
//   res.status(200);
//   res.send(`${id} 안녕`)
// })

app.put("/list/:id", (req, res) => {
  const { id } = req.params; // 또는 const id = req.params.id;
  res.status(200).send(`${id} 안녕`);
});

app.listen(port, ()=> {
  console.log(`${port}번 포트에서 서버실행중`);
})