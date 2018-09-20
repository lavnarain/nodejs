//with the help of the util
var util = require('util');
// a simple logging middleware
function logit (req,res,next){
    util.log(util.format('printing method and url %s and %s ', req.method , req.url))
    util.error()
    next()
}

var connect=require('connect')
connect()
.use(logit)
.listen(3000)
console.log('connected...')