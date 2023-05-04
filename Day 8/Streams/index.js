const fs=require("node:fs");

const readableStream=fs.createReadStream("./file.txt",{
    encoding:"utf-8",
    highWaterMark:2,
})

const writableStream=fs.createWriteStream("./file2.txt");

readableStream.on("data",(chunk)=>{
    writableStream.write(chunk);
    console.log(chunk);

})
