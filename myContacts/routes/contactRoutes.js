const express = require("express");
const router = express.Router();
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

// 모든 연락처 가져오기
// router.route("/contacts")
router.route("/")
.get(getAllContacts) // 읽기 
.post(creatContact); // 생성하기

//연락처 추가하기 
router
.route("/add")
.get(addContactForm)
.post(creatContact) // 생성하기
.post(updateContactForm);

// 연락처 수정하기 : route("/contacts/:id")
router
.route("/:id")
.get(getContact) //수정하기 
.put(updateContact)
.delete(deleteContact); // 삭제하기 

module.exports = router;