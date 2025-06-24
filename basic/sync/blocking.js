const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
  const {method,url} =req;
  res.setHeader("Content-Type","text/html");
  
// url에 따라 응답페이지 다르게 작성
  if(method == 'GET' && url =='/home') {
    res.statusCode = 200;
    res.end('HOME');
  } else if (method == 'GET' && url == '/about') {
    for(let i = 0; i < 1000; i++){
      for(let j = 0;j < 1000; j++){
        console.log(`${i} ${j}`);
      }
    }

    res.statusCode = 200;
    res.end("ABOUT");
  }else {
    res.statusCode = 404;
    res.end("NOT FOUND");
  }


  const readStream = fs.createReadStream(__dirname + "/index.html","utf-8")
  readStream.pipe(res);
});

server.listen(3000,() => {
  console.log("3000번 포트에서 서버실행");
})