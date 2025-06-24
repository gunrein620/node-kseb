// 요청, 응답 객체살표보기
const http =require("http");

//서버 생성
const server = http.createServer((req,res)=>{
    console.log(req.method); // 요청메서드확인 
    res.setHeader("Content-Type","text/plain"); // 응답헤더 
    res.write("Hello Node"); // 응답 본문
    res.end(); // 응답 종료 
  });

//서버 실행
server.listen(3000, () => {
  console.log('3000번 포트에서 서버 실행중');
});
