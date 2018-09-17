var array=[1,2,3,4,5]// use a array having 5 element 
var _=require('underscore')// require a underscore 
var result=_.filter(array,function(item){return item<10})// using a filter and callback function for the passing the value  
console.log(result)
var result1=_.map(array,(item)=>{return item *2})
console.log(result1)
var result2=_.reject(array,(item)=>{return item%2==0})
console.log(result2)
//after- function
//all- true
//allkey-[ '0', '1', '2', '3', '4' ]
//any -true
//apply-_ { _wrapped: undefined }
//assign-[ 1, 2, 3, 4, 5 ]
//before- function
//bind-showing error
//bindall-showing same error
//call-_{_wrapped:[function]}
//chain-_ { _wrapped: [ 1, 2, 3, 4, 5 ], _chain: true }
//chunk -[[]]
//compact