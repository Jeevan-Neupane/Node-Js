const http=require("node:http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json",
    })
    const myName={
        firstName:"Jeevan",
        lastName:"Neupane",
    }
    res.write(JSON.stringify(myName));
    res.end();
})

server.listen(3000,()=>{
    console.log("Server is Running");
});



