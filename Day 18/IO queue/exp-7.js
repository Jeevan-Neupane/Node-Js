const fs=require("fs");

setTimeout(()=>console.log("This is setTimeout 1"),0)

fs.readFile(__filename,()=>{
    console.log("From inside of i/o queue")
})