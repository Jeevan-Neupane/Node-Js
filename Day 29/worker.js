const {parentPort}=require("node:worker_threads");
let j = 0;
for (let i = 0; i < 60000000000; i++) {
    j++;

}
parentPort.postMessage(j);