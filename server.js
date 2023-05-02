const http = require("http");
const fs = require('fs');
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/html"});
   if(req.url === "/"){
   fs.readFile('./index.html','UTF-8',(err,data) => {
      res.write(data);
   res.end();
   })
  }
  else if(req.url === "/about"){
   fs.readFile('./about.html','UTF-8',(err,data) => {
      res.write(data);
   res.end();
   })
  }
  
}).listen(7777);
console.log('server runnig at port 7777')