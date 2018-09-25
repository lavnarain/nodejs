var express=require('express')
var bodyparser=require('body-parser')
var app=express()
.use(function(req,res){
   if (req.body.foo)
   res.end('body parser value'+req.body.foo)
   else
   res.end('body doesnot have foo')

})
// .use(function(err,req,res,next){
//     res.end('invalid body')
//     next()
// })
.listen(3000)