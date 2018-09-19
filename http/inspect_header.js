var http=require('http')
//var contentType=res.getheader('content-type')
var server=http.createServer((req,res)=>{
    console.log('response from the client')
    console.log(req.headers);
    console.log(req.httpVersion)
    console.log(req.httpVersionMajor)
    console.log(req.httpVersionMinor)
    console.log(req.method)
    // console.log(req.rawHeaders)
    // console.log(req.rawTrailers)
    // console.log(req.readable)
    // console.log(req.readableHighWaterMark)
    // console.log(req.readableLength)
    // console.log(req.socket)
    // console.log(req.statusCode)
    // console.log(req.statusMessage)
    // console.log(req.trailers)
    console.log(req.url)
    // console.log(req.connection)
    setInterval(function(){
        console.log('server is running....')
        
    },1000);
    // var contentType=res.getheader('content-type')
    // res.removeHeader('Content-Encoding')
    res.write('hello clent')
    res.end();
    res.statusCode=404;
}).listen(3000);
console.log('server is running....')