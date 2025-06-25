// 웹 서버 실행
const express = require("express");
const bodyparser = require("body-parser");
const errorhandler = require("./middlewares/errorhandler");
const app = express();  // 앱서버 생성
//const router = express.Router();   // 라우터 사용
const port = 3000;      // 포트번호 지정

const timeInfo = (req, res, next) => {
  //console.log("User Logged");
  let today = new Date();
  let nowDay = today.toDateString();
  let nowTime = today.toLocaleTimeString();

  req.timeInfo = {nowDay, nowTime};
  next();
};

app.use(timeInfo);
// 초기화면
app.get("/", (req, res) => {
  let date = req.timeInfo.nowDay;
  let time = req.timeInfo.nowTime;
  res.status(200);
  const responseText = `Hello Middleware : ${date}..${time}`;
  res.set("Content-type", "text/plain");
  res.send(responseText);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bodyparser.raw());
app.use(bodyparser.text());

app.use("/contacts", require("./routes/contactRoutes"));
app.use(errorhandler)

// 서버 실행
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});