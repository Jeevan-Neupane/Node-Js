const fs=require("node:fs");
const http=require("node:http");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html",
    })
    fs.createReadStream("./index.html").pipe(res);


})

server.listen(3000,()=>{
    console.log("Server is Started");
})