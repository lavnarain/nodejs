var http=require('http')
 var fs=require('fs')
// function send404(response){
//     response.writeHead(404,{'content-type':'text/html'})
//     response.write('error 404')
//     response.end()
// }
var server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(202,{'content-type':'text/html'})
        fs.createReadStream('./index2.html').pipe(res)
    }
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('error 404')
        res.end()
        
    }
}).listen(3000)
console.log('server is running')
