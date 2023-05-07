const fs=require("node:fs");
const zlib=require("node:zlib");

const gzib=zlib.createGzip();

const readableStream=fs.createReadStream("file.txt",{
    encoding:"utf-8",

})

readableStream.pipe(gzib).pipe(fs.WriteStream("./file2.txt.gz"));


