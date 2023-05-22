
Promise.resolve().then(()=>console.log("Promise Resolve 1"));

process.nextTick(()=>console.log("This is process.nextTick 1"));

//*nextTick Queue is executed first than promise queue
