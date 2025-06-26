const asyncHandler = require("express-async-handler");

//login page : GET

const getLogin = (req, res) => {
  res.render("home");
};

// login check POST
const loginUser = asyncHandler( async (req, res) => {
  const {username, password} = req.body;

  if(username == 'admin' && password == '1234'){
    res.redirect("/contacts")
  }else {
    res.send("fail...")
  }

})
module.exports = {getLogin, loginUser };