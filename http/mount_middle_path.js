var util =require('util')
function log(req,res,next){
    req.pipe(res);
    next()
}

var connect=require('connect')
connect()
.use('/log',log)
.use(function(req,res){res.end('bye...')})
.listen(3000)
console.log('connected...')
