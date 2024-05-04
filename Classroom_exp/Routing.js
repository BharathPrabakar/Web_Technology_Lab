let fs = require('fs');
let http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url == '/'||req.url == '/add') {
        res.writeHead(200,{"Content-type":"text/html"})
        res.end(fs.readFileSync('./Classroom_exp/addbooks.html','utf-8')) //This will add books
    }
    else if(req.url == '/update') {
      res.writeHead(200,{"Content-type":"text/html"})
      res.end(fs.readFileSync('./Classroom_exp/updatebooks.html','utf-8')) //This will updatebooks
    }
    else if(req.url == '/delete') {
      res.writeHead(200,{"Content-type":"text/html"})
      res.end(fs.readFileSync('./Classroom_exp/deletebooks.html','utf-8')) //This will deletebooks
    }
    else if(req.url == '/retrive') {
      res.writeHead(200,{"Content-type":"text/html"})
      res.end(fs.readFileSync('./Classroom_exp/retrivebooks.html','utf-8')) //This will retrive books
    }
});
server.listen(8000,'localhost',()=>{
  console.log("Server has started");
});