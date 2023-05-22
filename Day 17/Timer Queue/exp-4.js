setTimeout(() => {
    console.log("Timeout 1")
    Promise.resolve().then(() => {
        console.log("From Promise 3")
    })
}, 0)
setTimeout(() => {
    console.log("Timeout 2")

    process.nextTick(() => {
        console.log("Next Tick inside of set Timeout");
    })
}, 0)
setTimeout(() => {
    console.log("Timeout 3")
}, 0)


//&=====>The checking of microtask queue occured in each call back and executed if any call back in microtask queue are present