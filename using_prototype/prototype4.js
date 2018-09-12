function foo()
{}
foo.prototype.bar=123
//create an instance 
var call=new foo()
var call2=new foo()
//call by the instance 
console.log(foo.prototype.bar);
console.log(foo.prototype.bar);
// changing the value without instance but this is not possible
foo.bar='abc'
//foo.prototype.bar='xyz' //for changing the value we use the prototype keyword

//calling the instance
console.log(call.bar);
console.log(call2.bar);
