const http=require("node:http");

const response=http.createServer((req,res)=>{

res.writeHead(200,{
    "Content-Type":"text/plain",
})
  
   res.write("Hello World!");
   res.end("Hello World");
})
response.listen(3000,()=>{
    console.log("Hello I am started");
});