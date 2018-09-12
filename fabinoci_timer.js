function  fub(n)
    {
        if (n<2)
        return 1;
        else 
        return (n-2)+(n-1);
    }
console.time('timer')
setTimeout(function (){
    console.timeEnd('timer')
},1000)
fub(22)
