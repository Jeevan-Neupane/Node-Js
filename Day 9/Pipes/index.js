const fs=require("node:fs");

const readableStream=fs.createReadStream("file1.txt",{
    encoding:"utf-8",
    highWaterMark:2,
})

const writableStream=fs.createWriteStream("file2.txt");

// readableStream.on("data",(chunks)=>{
//     console.log(chunks);
//     writableStream.write(chunks);

// })

readableStream.pipe(writableStream);