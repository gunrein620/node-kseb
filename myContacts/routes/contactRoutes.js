const express = require("express");
const router = express.Router();

// 모든 연락처 가져오기
// router.route("/contacts")
router.route("/")
.get((req, res) =>{
  res.status(200).send("Contacts Router get");
  })
.post((req, res) => {
  console.log(req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone) {
    return res.status(200).send("필수자료 입력필요");
  }
  res.status(201).send("Create Contacts");
});
// 연락처 수정하기 : route("/contacts/:id")
router
.route("/:id")
.get((req,res) => {
  res.status(200).send("Contact id get ");
})
.put((req, res) => {
  res.status(200).send("Put Contacts ");
})
.delete((req, res) => {
  res.status(200).send("Delete Contacts");
});

module.exports = router;