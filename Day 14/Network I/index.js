const https=require("node:https");

const start=Date.now();
const Max_CALLS=120;


for(let i=0;i<Max_CALLS;i++){
    https.request("https://www.google.com",(res)=>{
        res.on("data",()=>{});
        res.on("end",()=>{
            console.log(`Request: ${i+1}`,Date.now()-start);
        })
    }).end()
}