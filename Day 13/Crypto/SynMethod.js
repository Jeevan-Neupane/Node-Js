const crypto=require("node:crypto");

const Start=Date.now();

crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

console.log("Hash Time ",Date.now()-Start);