// file 읽어서 내용 출력
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
  }
});
