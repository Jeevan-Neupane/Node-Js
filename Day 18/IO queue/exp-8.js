const fs = require("fs");


fs.readFile(__filename, () => {
    console.log("From inside of i/o queue")
})

setTimeout(() => console.log("This is setTimeout 1"), 0)
process.nextTick(()=>{
    console.log("Inside of next Tick");
})

Promise.resolve().then(()=>{
    console.log("Inside of Resolve")
})

for(let i=0;i<2000000000;i++){
    
}