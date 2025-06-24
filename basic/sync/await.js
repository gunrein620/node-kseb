const fs = require("fs").promises;

async function readDirAsync() {
  try{
    const files = await fs.readdir("./");
    console.log(files);
  } catch {
    console.log(err);
  } finally {
    console.log('File read end');
  }
}
readDirAsync();
console.log("코드 끝!");