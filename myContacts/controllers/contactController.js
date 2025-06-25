const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactSchema")

// 모든 자료 읽어오기
const getAllContacts = asyncHandler (async(req, res) => {
  try{
    const contacts = await Contact.find();
    res.status(200).send(contacts);
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

  res.status(201).send("Create Contacts");
});

const updateContact = asyncHandler ((req,res) => {
  res.status(200).send("Contact id get ");
})

const deleteContact = asyncHandler ((req, res) => {
  res.status(200).send("Delete Contacts");
});

module.exports = {
  getAllContacts, 
  creatContact, 
  updateContact, 
  deleteContact
}