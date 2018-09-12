
function outerFunction(args)
{
var variableInoutterFunction=args;
	return function()
	{
	console.log(variableInoutterFunction);
	}
}
var innerFunction=outerFunction('hello clousure')
innerFunction();
