// 웹 서버 실행
const express = require("express");
const app = express();  // 앱서버 생성
//const router = express.Router();   // 라우터 사용
const port = 3000;      // 포트번호 지정


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/contacts", require("./routes/contactRoutes"));

// 서버 실행
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});