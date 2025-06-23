const fs = require('fs');

// 상위 디렉토리의 파일 목록 출력
let files = fs.readdirSync('../',(err,files)=>{
    if(err){
        console.error(err);
    }else{
        console.log(files);
    }
});
console.log(files);

// 상위 디렉토리의 파일목록 출력 => 동기화 방식
let files2 = fs.readdirSync('../');
console.log('동기화 디렉토리 목록');
console.log(files2);