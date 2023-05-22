process.nextTick(()=>{
    console.log("Next Tick  1");
})
process.nextTick(()=>{
    console.log("Next Tick  2");
    process.nextTick(()=>{
        console.log("Next Tick  inside of next queue");
    })
})
process.nextTick(()=>{
    console.log("Next Tick  3");
})


Promise.resolve().then(()=>{
    console.log("Promise 1");
})
Promise.resolve().then(()=>{
    console.log("Promise 2");
    Promise.resolve().then(()=>{
        console.log("Promise inside of Pormise");
    })
})
Promise.resolve().then(()=>{
    console.log("Promise 3");
})