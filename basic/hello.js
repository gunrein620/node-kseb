//const c = require('ansi-colors');

function hello(name) {
    //console.log(c.green(name + "님 안녕하세요")); // 컬러 출력
    console.log(name + "님 안녕하세요");
}

hello('홍길동');

let num1 = 10;
let num2 = 20;

// 연결연산자 사용 " + "
console.log(num1 + num2);
console.log(`${num1}과 ${num2}을 더하면 ${num1 + num2} 이네요`);