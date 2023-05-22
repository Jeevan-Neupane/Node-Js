const fs=require("node:fs");


fs.readFile(__filename,"utf-8",(err,data)=>{
    // console.log(data);
    console.log("This is read file 1");
})

process.nextTick(()=>{
    console.log("NextTick Callback Function")
})

Promise.resolve().then(()=>console.log("Promise Call Back"))