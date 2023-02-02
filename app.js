const http = require('http');
const fs = require('fs');

var server=http.createServer(function (req, res) {
   const url =req.url;
   const method =req.method;
   if(url==='/')
   {
      res.setHeader('Content-type','text/html');
      res.write('<html>');
      res.write('<head><title>Enter User Details</title></head>');
      res.write('<body><center><form  action="/message" method="POST"><input type="text" name="username"  /><input type="submit"/></form></body>');
      res.write('</html>');
      return res.end();   
   }
   if(url==='/message' && method=='POST')
   {
      const body=[];
      req.on('data',(chunk)=>{
        body.push(chunk);
        console.log(chunk);
      })

      req.on('end',()=>{
         const parsedbody = Buffer.concat(body).toString();
         const message=parsedbody.split('=');
         fs.writeFileSync('message_split.txt',message[1]);
      })

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
