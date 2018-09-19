var http=require('http')
var server=http.createServer(function(req,res){
    console.log('response from the local host ');
    res.write('hello client')
    res.end();
});
server.listen(3000);
console.log('server is running now....')
