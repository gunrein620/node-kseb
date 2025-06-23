const path = require('path');

// 경로 연결 path.join()
const fullPath = path.join('some', 'path', 'a.txt');
console.log(fullPath);

// 파일의 절대 경로
console.log(`파일의 절대 경로 : ${__filename}`);

// 파일의 경로 추출하기
const dir = path.dirname(__filename);
console.log(`파일의 경로 :  ${path.dirname(__filename)} ,\n 변수활용 : ${dir}`);

console.log(`파일명만 : ${path.basename(__filename, '.js')}`);

//경로를 객체로 반환 : path.parse(경로)
const parsedPath = path.parse(__filename);
console.log(parsedPath);

