// Lets create a test function and set a member on its prototype
function foo()
{
    foo.prototype.bar=123
    var a=10;
    console.log(a);
}
console.log('start');
foo();
console.log('stop');
// Lets create two instances
var call=new foo()
var call1=new foo()
// Show original value
console.log(call.bar);
console.log(call1.bar);
// Modify prototype
foo.prototype.bar='abc'
a=20;
console.log(a);
// All instances changed
console.log(call.bar);
console.log(call1.bar);


