const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const Main = asyncHandler(async (req, res) => {
  res.render("main");
});

module.exports = { Main };