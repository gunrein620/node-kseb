const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
  const {method,url} =req;
  res.setHeader("Content-Type","text/html");
  
// url에 따라 응답페이지 다르게 작성
  if(method == 'GET' && url =='/index') {
    res.statusCode = 200;
    res.end('INDEX');
  } else if (method == 'GET' && url == '/about') {
    res.statusCode = 200;
    res.end("ABOUT");
  } else if (method == 'GET' && url == '/contact'){
    res.statusCode = 200;
    res.end('CONTACT'); 
  }else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }


  const readStream = fs.createReadStream(__dirname + "/index.html","utf-8")
  readStream.pipe(res);
});

server.listen(8080,() => {
  console.log("8080번 포트에서 서버실행");
})