var foo={
    bar:123,
    bas1:()=>{

        console.log("foo's bar :",foo.bar);
        console.log("calling bar by this keyword:",this.bar);
        console.log("calling bas1 by this keyword:",this.bas1)
            }
        }
        foo.bas1();
var foo1={
bar1:'abc',
bas:function()
{
console.log('this keyword is used:', this.bar1);
}
}
console.log('foo1:',this.bar1);
foo1.bas();