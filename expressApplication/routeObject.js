var express=require('express')
var app=express()
app.route('/')
.all(function(req,res,next){
    res.end('all')
    next()
})
.get(function(req,res){
    res.end('get')
})
.post(function(req,res){
    res.end('post')
})
.put(function(req,res){
    res.end('put')
})
.delete(function(req,res){
    res.end('delete')
})
app.listen(3000);

