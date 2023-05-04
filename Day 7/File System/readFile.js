
const fs = require("node:fs");

function read() {
    console.log("first")
    const fileContents = fs.readFileSync("hello.txt", "utf-8");//&Synchronous reading of the data
    console.log(fileContents);

    console.log("second");

    fs.readFile("./hello.txt", "utf-8", (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(data);
        }
    })

    console.log("third");


}


module.exports=read;
