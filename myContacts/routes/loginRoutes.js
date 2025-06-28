const express = require("express");
const router = express.Router();
const { 
  getLogin,
  loginUser,
  getRegister,
  registerAdmin,
  logout
} = require("../controllers/loginController");

router.route("/")
.get(getLogin)
.post(loginUser);

//레지스터 라우트
router.route("/register")
.get(getRegister)
.post(registerAdmin)

//로그아웃 라우트
router.route("/logout").get(logout);

module.exports = router;