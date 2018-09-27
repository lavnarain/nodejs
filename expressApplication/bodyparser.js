var express=require('express')
var bodyparser=require('body-parser')
//create a router object quite easily using express.Router() function
var item=[]// An in memory collection of items
// Create a router
var router=express.Router()
router.use(bodyparser())