const fs = require('fs');

const readStream = fs.createReadStream("./readMe.txt");

readStream.on('data',(chunk)=>{
    console.log(chunk);
});

readStream.on('end',()=>{
    console.log('finished reading data');
});

readStream.on('error',(err)=>{
    console.log(`error: ${err}`);
});