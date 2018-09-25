var express=require('express')
var http =require('http')
var fs=require('fs')
var timeout = require('connect-timeout');
var app = express()
.use('/api', timeout(5000),
// function (req, res, next) {
// // simulate a hanging request by doing nothing
// },
function(req,res){
    if(req.method=='Get'&& req.url=='/')
    {
    var server =http.createServer(200,{'connect-text':'text/html'})
    fs.createReadStream('C:/Users/amit07/Desktop/node/express/public/index').pipe(res)
    res.end('response the start....')
}
else{
    function send404(){
        response.writeHead(404,{'content-type':'text/html'})
        response.write('error 404 ')
        response.end();
    }
}
})
.listen(3000)