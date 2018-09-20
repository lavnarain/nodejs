var util=require('util')
function echo(req,res,next)
{
    req.pipe(res)
    next()
}
var connect=require('connect')
connect()
.use('/echo',echo)
.listen(3000)
console.log('connect....')