
const fs = require("node:fs");

function write(){
    fs.writeFileSync("writeOn.txt", "I am using write file sync to write");

fs.writeFile("writeOn.txt","Time is important and ",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Writing Is done successfully");
    }
})
fs.readFile("./hello.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

fs.writeFile("writeOn.txt","I am in love with time",{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successfully appended");
    }
})

}

fs.writeFileSync("writeOn.txt", "I am using write file sync to write");

fs.writeFile("writeOn.txt","Time is important and ",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Writing Is done successfully");
    }
})
fs.readFile("./hello.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

fs.writeFile("writeOn.txt","I am in love with time",{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Successfully appended");
    }
})

module.exports=write;