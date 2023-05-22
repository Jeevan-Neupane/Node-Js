const fs=require("node:fs");
fs.readFile(__dirname,()=>{
    console.log("Inside of Read file")
    setImmediate(()=>{
        console.log("Inside of Check Queue and I/O queue");
    })
    process.nextTick(()=>{
        console.log("Inside of next tick and read file");
    })
    Promise.resolve().then(()=>{
        console.log("This is inner promise inside read file")
    })
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
