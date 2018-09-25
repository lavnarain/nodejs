//server static 
var express = require('express');
var serveStatic = require('serve-static');
var app = express()
.use(serveStatic(__dirname + './public',{'index':['index2.html','indexhtm']}))
.listen(3000);
