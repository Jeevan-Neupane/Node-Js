setImmediate(()=>{
    console.log("Inside of set Immediate Function 1");
})
setImmediate(()=>{
    console.log("Inside of set Immediate Function 2");
    process.nextTick(()=>{
        console.log("Inside of next tick 1");
    })
    Promise.resolve().then(()=>{
        console.log("Inside of Promise resolve ");
    })
})

setImmediate(()=>{
    console.log("This is set Immediate 3");
})