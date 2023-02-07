   const fs = require('fs');

   const requestHandler=(req,res)=>{
        const url =req.url;
        const method =req.method;
        if(url==='/')
        {
            res.setHeader('Content-type','text/html');
            res.write('<html>');
            res.write('<head><title>Node js Basic</title></head>');
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
    
        return req.on('end',()=>{
            console.log('End Event Received');
            const parsedbody = Buffer.concat(body).toString();
            const message=parsedbody.split('=');
            fs.writeFile('hello.txt',message[1],(err)=>{
                console.log('File Write Completed');
                res.setHeader('Location','/');
                res.statusCode = 302;
                return res.end();
            });
        })
        
        }
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Node js Training</title></head>');
        res.write('<body><center><h3>Welcome To Node js</h3></center></body>');
        res.write('</html>');
        res.end();
   };

//    module.exports = {
//       handler:requestHandler,
//       someText:'Printing some Text'
//    };

//Only used Nodes Used in exports
// exports.handler=requestHandler;
// exports.someText='Print Some Text';

//Also Used To the javascript

module.exports.handler=requestHandler;
module.exports.someText='Print Some Text';

   