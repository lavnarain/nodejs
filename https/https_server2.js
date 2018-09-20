var https=require('https')
var fs =require('fs')
var option={
    key:fs.readFileSync('./key.pem'),
    cert:fs.readFileSync('./cert.pem')
}
var connect=require('connect')
var app =connect()
https.createServer(option,app)
.listen(3000)
console.log('server is running...')