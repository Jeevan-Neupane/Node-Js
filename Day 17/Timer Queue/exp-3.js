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

process.nextTick(() => {
    console.log("Next Tick 1");
})
process.nextTick(() => {
    console.log("Next Tick 2");
})
process.nextTick(() => {
    console.log("Next Tick 3");
})

Promise.resolve().then(() => {
    console.log("From Promise 1")
    process.nextTick(() => {
        console.log("Next Tick from inside of Promise");
    })
})
Promise.resolve().then(() => {
    console.log("From Promise 2")
    Promise.resolve().then(() => {
        console.log("From Promise inside of promise")
    })
})
Promise.resolve().then(() => {
    console.log("From Promise 3")
})

//&===>Callback in the microtask queue are executed before the timer queue


