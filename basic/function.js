// 여러형태의 함수 선언과 방법

// 기본 함수
function greeting(name) {
    console.log(`${name}님 안녕하세요`);
}

greeting('홍길동');

// 이름 없는 함수 선언방법, 함수표현식
const greeting1 = function(name) {
    console.log(`${name}님 안녕하세요`);
}

greeting1('김철수');

// 선언과 동시에 실행

(function(num1, num2) {
  console.log(`두수의 합은 ${num1 + num2} 이네요`)
})(100,200);

const addFunc = (num1, num2) => {
  console.log(`두수의 합은 ${num1 + num2} 이네요`)
}
addFunc(100,200);

// 애로우 함수

let hi = (name) => {
  console.log(`${name}님 안녕하세요`);
}
hi('박준오')

const sum = ((a, b) => {return a + b})
console.log(sum(50,80));
