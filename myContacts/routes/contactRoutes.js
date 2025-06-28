const express = require("express");
const router = express.Router();
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");

const {
      getAllContacts,
       creatContact,
       getContact,
       updateContact,
       deleteContact,
       addContactForm,
       updateContactForm
      }
      = require("../controllers/contactController")


router.use(cookieParser()); //쿠키 사용 정의
router
.route("/")
.get(checkLogin, getAllContacts)
.post(creatContact);

// 모든 연락처 가져오기
// router.route("/contacts")
router.route("/")
.get(checkLogin,getAllContacts) // 읽기 
.post(checkLogin,creatContact); // 생성하기

//연락처 추가하기 
router
.route("/add")
.get(checkLogin,addContactForm)
.post(checkLogin,creatContact) // 생성하기
.post(checkLogin,updateContactForm);

// 연락처 수정하기 : route("/contacts/:id")
router
.route("/:id")
.get(getContact) //수정하기 
.put(updateContact)
.delete(deleteContact); // 삭제하기 

module.exports = router;