const fs=require("node:fs");

const readableStream= fs.createReadStream("text.txt",{
    encoding:"utf-8",

})
// const writableStream=fs.createWriteStream("text1.txt");
// readableStream.on("data",(chunk)=>{
//     writableStream.write(chunk);
    
// })

// readableStream.pipe(writableStream);
readableStream.close();

readableStream.on("close",()=>{
    console.log("This is from close queue");
})


setImmediate(()=>{
    console.log("This is from immediate queue");
})

setTimeout(()=>{
    console.log("This is from set Time out queue");
},0)

Promise.resolve().then(()=>{
    console.log("This is inside of Promiese queue");
})

process.nextTick(()=>{
    console.log("This is from nextTick queue"); 
})
