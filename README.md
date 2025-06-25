# node-kseb

# 5일 교육 과정

백엔드학습 
nodeJS 
MongoDB
Express


# 1일차

nodeJS 설치

nodeJS 기본 문법

절대경로, 상대경로 -> 가급적 상대경로 사용

# 2일차 

http 모듈 활용 서버만들기 
라우팅

nodemon 활용
 npm i nodemon -g --save-dev
 sudo npm i -g nodemon

 package.json -> scripts 에서
   "start":"nodemon app"  
   추가해주면 npm start 로 실행명령어를 활용 할 수 있다.

# 3일차 
app.js 에서
app.use("/contacts", require("./routes/contactRoutes"));
이렇게 경로를 설정해 줬기 때문에 

contactRoute 에서 
이렇게 /contacts/:id 이런식으로 할 필요 없음 
 /contacts 생략
router.route("/")  || route("/:id")  <- 올바른 예시

2. 에러처리 미들웨어 

===
미들웨어 등록순서 
1. express 및 필요한 패키지 임포트(업로드)
2. express 인스턴스 생성 
3. 라우트 코드작성
3. 라우트 || 미들웨어 등록 (에러를 제외하고)
4. 오류처리 미들웨어 등록
5. 서버 시작

---
1. const express = require("express"); //express 및 필요한 패키지 임포트(업로드)

   ...

2. const app = express(); //express 인스턴스 생성 

3. app.get //라우트 코드작성

4. app.use(경로, require(라우트파일)) //라우트 || 미들웨어 등록 (에러를 제외하고)
   
5. app.use(에러) //오류처리 미들웨어 등록

6. app,listen(); // 서버실행 

