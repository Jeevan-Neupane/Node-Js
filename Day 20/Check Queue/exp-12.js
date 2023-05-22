setImmediate(()=>{
    console.log("This is setImmediate One");
})

setImmediate(()=>{
    console.log("This is setImmediate two");
    process.nextTick(()=>{
        console.log("This is next Tick inside of setImmediate");
    })
    Promise.resolve().then(()=>{
        console.log("This is the promise inside of set Immediate");
    })
})


setImmediate(()=>{
    console.log("This is set Immediate 3");
})