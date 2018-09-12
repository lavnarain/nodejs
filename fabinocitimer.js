console.time('timer')
function fab(n){
    if (n<2)
    return 1
    else
    return fab(n-2)+fab(n-1)
}
fab(33)
console.timeEnd('timer')