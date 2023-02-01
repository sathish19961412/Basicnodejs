const http = require('http');
const fs =require('fs');
var server=http.createServer(function (req, res) {
   const url =req.url;
   const method =req.method;
   if(url==='/')
   {
      res.setHeader('Content-type','text/html');
      res.write('<html>');
      res.write('<head><title>Enter User Details</title></head>');
      res.write('<body><center><form action="/message" method="POST"><input type="text" name="username" /><input type="submit" name="value" /></form></body>');
      res.write('</html>');
      return res.end();   
   }
   if(url==='/message' && method=='POST')
   {
      fs.writeFileSync('hello.txt','Hello World');
      res.setHeader('Location','/');
      res.statusCode = 302;
      return res.end();
   }
   res.setHeader('Content-type','text/html');
   res.write('<html>');
   res.write('<head><title>Node js Training</title></head>');
   res.write('<body><center><h3>Welcome To Node js</h3></center></body>');
   res.write('</html>');
   res.end();

})
server.listen(1996);
