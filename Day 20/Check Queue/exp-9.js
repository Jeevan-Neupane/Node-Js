const fs=require("node:fs");
fs.readFile(__dirname,()=>{
    console.log("Inside of Read file")
})


process.nextTick(()=>{
    console.log("Inside of next tick file");
})

Promise.resolve().then(()=>{
    console.log("Inside of Promise Queue");
})

setTimeout(()=>{
    console.log("Inside of Timer Queue");
},0)

setImmediate(()=>{
    console.log("Inside of Check Queue");
})