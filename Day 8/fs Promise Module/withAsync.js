const fs=require("node:fs/promises");

async function readFile(){
    try{
        const data=await fs.readFile("file.txt","utf-8");
        console.log(data)
    }
    catch(err){
        console.log(err);

    }
}

readFile();