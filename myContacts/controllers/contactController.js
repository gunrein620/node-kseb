const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactSchema");

const path = require("path");

// 모든 자료 읽어오기
const getAllContacts = asyncHandler (async(req, res) => {
  try{
    const contacts = await Contact.find();
    res.render("index", {heading: "Userlist", users: contacts}); // 문자열로 해주기 헷갈리수 있음 ./views/getAll.ejs <- 이걸로 렌더링

    // const filePath = path.join(__dirname, "../assets","getAll.html")
    // console.log(filePath);
    // res.status(200).sendFile(filePath)
    //.send("<h1 style='color:green' align='center'>Hello html</h1>")
  } catch (error){
    console.log(error);
  }
});

//자료 생성
const creatContact = asyncHandler (async(req, res) => {
  console.log(req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone) {
    return res.status(200).send("필수자료 입력필요");
  }
  const contact = await Contact.create({
    name,
    email,
    phone
  });

  res.redirect("/contacts")
});

// 특정 id 자료 읽어오기
const getContact = asyncHandler (async (req,res) => {
  const contact = await Contact.findById(req.params.id)
  res.render("update", {contact: contact});
})


// 자료수정 
const updateContact = asyncHandler (async(req,res) => {
  const id = req.params.id;
  const {name, email, phone} = req.body;

  const updateContact = await Contact.findByIdAndUpdate(
    id,
    {name, email, phone},
    {new: true}
  );

  // const contact = await Contact.findById(id);
  // contact.name = name;
  // contact.email = email;
  // contact.phone = phone;
  // contact.save();

  res.redirect("/contacts");
})

// 자료삭제
const deleteContact = asyncHandler (async (req, res) => {

    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete()

  //res.status(200).send(`Delete Contacts for : ${req.params.id}`);
  res.redirect("/contacts");
});

const addContactForm = (req,res) => {
  res.render("add");
}

const updateContactForm = (req,res) => {
  res.render("update");
}


module.exports = {
  getAllContacts, 
  creatContact, 
  getContact,
  updateContact, 
  deleteContact,
  addContactForm,
  updateContactForm
}