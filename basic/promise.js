let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve('피자 주문 완료');
  } else {
    reject('피자 주문 실패');
  }
});

// 프로미스 체이닝 방식
pizza
.then((result) => console.log(result))
.catch((error) => console.log(error));