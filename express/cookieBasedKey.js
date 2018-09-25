var express=require('express')
var cookieSession=require('cookie-session')
var app =express()
.use(cookieSession({
    keys:['my secret key']
}))
.use('/set',function(req,res){
    if (req.session.view)
    {
        req.session.view++
    }
    else{
        req.session.view=1
    }
    res.end('total view'+req.session.view)
})
.use('/reset',function(req,res){
delete req.session.view;
res.end('cleared view')
})
.listen(3000);