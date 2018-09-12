//The secret sauce is the new keyword (which you have
//already seen) and a property called the prototype. Every object in JavaScript has an internal link to another object
//called the prototype.
var foo={}
foo.__proto__.bar=123
console.log(foo.bar);