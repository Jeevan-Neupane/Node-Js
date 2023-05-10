const http=require("node:http");
const fs=require("node:fs");

const server= http.createServer((req,res)=>{
    let name="Jeevan Neupane";
    res.writeHead(200,{
        "Content-Type":"text/html"
    });

    let content=fs.readFileSync("index.html","utf-8");
    content=content.replace("Hello",name);

    res.write(content);

    res.end();
    
});

server.listen(3000,()=>{
    console.log("The server is started ");
})