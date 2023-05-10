const http=require("node:http");

console.log("Server is Running ");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/plain"
    })
    res.write("Hello Jeevan");
   
    res.end();
});

server.listen(3000,()=>{
    console.log("server is running in port 3000");
});
