// 웹 서버 실행
const express = require("express");
const app = express();  // 앱서버 생성
const router = express.Router();   // 라우터 사용
const port = 3000;      // 포트번호 지정
// 초기화면
app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Router!!");
});
// 모든 연락처 가져오기
// router.route("/contacts")
router.route("/contacts")
.get((req, res) =>{
  res.status(200).send("Contacts Router get");
  })
.post((req, res) => {
  res.status(200).send("Create Contacts");
});
// 연락처 수정하기 : route("/contacts/:id")
router
.route("/contacts/:id")
.get((req,res) => {
  res.status(200).send("Contact id get ");
})
.put((req, res) => {
  res.status(200).send("Put Contacts ");
})
.delete((req, res) => {
  res.status(200).send("Delete Contacts");
});
app.use(router);
// 서버 실행
app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});