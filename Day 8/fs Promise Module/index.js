const fs=require("node:fs/promises");

console.log("before");

fs.readFile("file.txt","utf-8").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

console.log("after");