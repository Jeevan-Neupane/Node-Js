const fs=require("node:fs");
const http=require("node:http");


const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html",
    })
    const text=fs.readFileSync("./index.html","utf-8");
    res.write(text);
    res.end();

})

server.listen(3000,()=>{
    console.log("Server is Started");
})