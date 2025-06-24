const http =require("http");

//서버 생성
const server = http.createServer((req,res)=>{
    //console.log('새로고침');
    console.log(req);
});

//서버 실행
server.listen(3000, () => {
  console.log('3000');
});
