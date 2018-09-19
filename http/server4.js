var connect=require('connect'),http=require('http')
var app=connect();
http.createServer(app)
.listen(3000)
console.log('server is running ')