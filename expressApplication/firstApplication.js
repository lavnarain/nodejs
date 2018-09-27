var express=require('express')
var app=express()
app.all('/',function(req,res,next){
    res.re
    res.write('show all')
    res.end('its ended')
    next()
});
app.get('/',function(req,res,next){
    res.write('this is get ')
    res.end('its ended')
});
app.put('/',function(req,res,next){
    res.write('this is put')
    res.end('its ended')
});
app.post('/',function(re,res,next){
    res.write('this is post')
    res.end('post is ened ')

});
app.delete('/',function(req,res,next){
    res.write('this is delete')
    res.emd('delete is ended ')
});
app.listen(3000)