const http=require('http');
const mod = require('./Exp5_own_module');

const server=http.createServer((req,res)=>{
});

server.listen(5501);
console.log("server started");