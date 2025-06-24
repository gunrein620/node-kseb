const fs = require("node:fs");

const data = fs.readFile("../path/example.txt","utf-8",(err,files) =>{
  if(err){
    console.log(err);
  }
  console.log(files);
});

console.log('Done');