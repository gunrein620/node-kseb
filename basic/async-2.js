// 콜백 

function displayA() { 
  console.log('A');
}

function displayB(callback) {
  setTimeout(() => { // 2초 뒤에 실행
    console.log('B');
    callback();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
