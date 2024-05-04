const http = require('http');
const fs = require('fs');
var server = http.createServer(function(req,res)
{
    if(req.url=='/exp1')
    {
        fs.readFile('Exp1.html','utf-8',(err1,data1)=>
    {
        if(err1)
        {
            res.write(err1);
            res.writeHead(200,{"Content-Type":"text/html"});
        }
        else
        {
            res.end(data1);
        }
    });
    }
    else if(req.url=='/exp2')
    {
        fs.readFile('Exp2.html','utf-8',(err2,data2)=>
    {
        if(err2)
        {
            res.write(err2);
            res.writeHead(200,{"Content-Type":"text/html"});
        }
        else
        {
            res.end(data2);
        }
    });
    }
    console.log("Request recived");
});
server.listen(3000);
console.log("server running");