var foo = require('./foo');
console.log(typeof foo);

// create a new object
var obj = (foo());
console.log(typeof obj);

// use it
console.log((obj.something)); // 123