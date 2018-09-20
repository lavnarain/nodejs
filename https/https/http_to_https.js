var https = require('https');
var fs = require('fs');
var options = {
key: fs.readFileSync('./key.pem'),
cert: fs.readFileSync('./cert.pem')
};
https.createServer(options, function (req, res) {
if(req.method=='GET' && req.url=="/")
{
    fs.readFile("index2.html", function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();    
    })//fs.createReadStream('./index.html').pipe(res);  
}
else
{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('error 404')
    res.end()   
    
}
}).listen(443);
// Redirect from http port 80 to https
var http = require('http');
http.createServer(function (req, res) {
res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
res.end();
}).listen(80);