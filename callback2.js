function outter(callback){
    console.log('start');
    setTimeout(callback,3000)
}
function webrequest(request){
    outter(function (){
        console.log('webrequest',request.id);
        console.log('webrequest2',request.id);
    })
}
webrequest({id:1})
webrequest({id:2})