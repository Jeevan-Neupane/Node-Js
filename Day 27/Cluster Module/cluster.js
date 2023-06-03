const cluster=require("node:cluster");



if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
}else{
    console.log(`Master process ${process.pid} is running`);
}
