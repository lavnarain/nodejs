var http=require('http')
var fs=require('fs')
function send404(response){
    response.writeHead(404,{'content-type':'text/html'})
    response.write('error 404 ')
    response.end();
}
var server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream('./index.html').pipe(res);
    }
    else{
        send404(res)
    }
}).listen(3000)
console.log('server is running at port 3000')