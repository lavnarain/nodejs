var util =require('util')
function greeting(message){return function (req,res,next)
{
    req.pipe(res)
    res.end(message)
    next()
}
}
var hellogreeting=greeting('hello world')
var connect=require('connect')
connect()
.use('/hello',hellogreeting)
.listen(3000)
console.log('connected..')