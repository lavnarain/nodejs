var https=require('https')
var fs=require('fs')
var options={
    //openssl genrsa 1024 > key.pem
    key:fs.readFileSync('./key.pem'),
    //openssl req -x509 -new -key key.pem > cert.pem
    cert:fs.readFileSync('./cert.pem')
};
https.createServer(options,(req,res)=>{
    if(req.method=='GET' && req.url=="/"){
        fs.readFile("index2.html", function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();    
    })//fs.createReadStream('./index.html').pipe(res);
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('error 404')
        res.end()   
        
    }
}).listen(3000)
console.log('server is running')