const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.write("Home Page");
        res.end();

    } else if (req.url === "/slow-page") {
        for (let i = 0; i < 60000000000; i++) { };//*This will stimulate the cpu works
       
        
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.write("Slow Page");
        res.end();
    }
})

server.listen(3000, () => {
    console.log("Port 3000 is listening to you");
})

//*When the home page is loaded it takes time ==> 1ms
//*When slow-page is loaded it takes time==>500ms

//*But when both the pages are reloaded time taken by home page also increse to time taken by slow-page .

//&This is because of the single thread using nature of node since execution take in single thread the execution of home page is delayed by slow-page

//^To overcome node created cluster module