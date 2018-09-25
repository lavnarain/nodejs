var express = require('express');
var cookieparse=require('cookie-parser')
var app = express()
.use(cookieparse())
.use('/foo',function (req, res) {
    if(req.cookies.name){
        res.clearCookie('name')
        res.end('name cookie is cleared! was '+req.cookies.name)
    }
    else {
        res.cookie('name', 'foo');
        }
        res.end('Hello!');
        })
        .listen(3000);
// console.log('client request cookies header\n', req.headers['cookie'])
// res.cookie('name', 'foo');
// res.end('Hello!');
// })
// .listen(3000);