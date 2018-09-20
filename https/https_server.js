/*
var connect=require('connect')

var https=require('https')
var fs =require('fs')
var options={
    //openssl genrsa 1024 > key.pem
    key:fs.readFileSync('./key.pem'),
  //openssl req -x509 -new -key key.pem > cert.pem
    cert:fs.readFileSync('./cert.pem')
};
var server=https.createServer(options,(req,res,next)=>{
    if(req.method=='GET' && req.url=='/')
    {
        res.writeServer(200,{'content-type':'text/html'})
        res.write('hello from client...')
        res.end('hello client...')
    }
    else 
    {
        send404(function(resonse){
            resonse.writeServer(400,{'content-type':'text/html'})
            response.write('404 error')
            response.end()
        })
    }

}).listen(3000)
console.log('server is start...')

*/

var https = require('https');
var fs = require('fs');
var options = {
key: fs.readFileSync('./key.pem'),
cert: fs.readFileSync('./cert.pem')
};
https.createServer(options, function (req, res) {
res.end('hello client!');
}).listen(3000);