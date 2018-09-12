var foo=
{
    bar:123,
}
function bas(){
    if(this==global)
    console.log('this is call by global');
    if(this==foo)
        console.log('this call by foo');
    
}   
bas();
foo.bas=bas
foo.bas()