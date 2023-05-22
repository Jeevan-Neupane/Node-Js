console.log("Console Log 1");
process.nextTick(()=>{
    console.log("Console Log from nextTick Queue");
})

console.log("Console Log 2")


//&---> Result is that the user written synchronous JS code takes priority over async code that the runtime would like to eventually execute
