// calling a function by global or instance 
function foo()
{
    this.bar=123;
    console.log('is this a global',this==global);
}
foo();
//by this keyword
console.log(global.bar);

// by instance

var newfoo =new foo()
newfoo.foo;
console.log('calling by instance:',newfoo.bar)
