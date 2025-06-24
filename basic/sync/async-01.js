// 비동기 처리 

console.log("1st");
console.log("2nd");
console.log("3rd");

console.log('='.repeat(20));

// 시간이 걸리는 작업추가 
console.log("1st");
setTimeout(()=> {
  console.log("2nd");
},2000)
console.log("3rd");

console.log('='.repeat(20));

const fs = require("fs");

fs.readdir("../",(err,files) => {
  if (err){
    console.log(err);
  }
  console.log(files);
})
console.log("Done");