const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((req,res)=>{
    

    if(req.url==="/"){
        res.writeHead(200,{
            "Content-Type":"text/plain"
        });
        res.write("Home Page");
        res.end();
    }
    else if(req.url==="/about"){
        res.writeHead(200,{
            "Content-Type":"text/plain"
        });
        res.write("About Page");
        res.end();
    }
    else if(req.url==="/api"){
        res.writeHead(200,{
            "Content-Type":"application/json"
        });
        res.write(JSON.stringify({
            name:"Jeevan",
            age:20,
        }));
        res.end();
    }

    else{
        res.writeHead(404);
        res.write(
            "Not found of given URL"

        );
        res.end();
    }



   
    

})

server.listen(3000,()=>{
    console.log("Server is Started");
})