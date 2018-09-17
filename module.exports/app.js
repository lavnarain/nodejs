module.exports=
{
abc:function()
{return{something:123}

}
}

// var b =require('./app')
// var c=b()
// console.log(typeof a);

// console.log(typeof something)
// console.log(c.something)
// console.log(module.exports);
var a =module.exports.abc();
console.log(a.something);
