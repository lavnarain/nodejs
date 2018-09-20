var util=require('util')
function logs(req,res,next)
{   req.pipe(res);
    next()
}
var connect=require('connect')
connect()
.use(logs)
.listen(3000)
console.log('server start')