const express = require("express");
const router = express.Router();
const { 
  getLogin,
  loginUser,
  getRegister,
  registerAdmin
} = require("../controllers/loginController");

router.route("/")
.get(getLogin)
.post(loginUser);

//레지스터 라우트
router.route("/register")
.get(getRegister)
.post(registerAdmin)

module.exports = router;