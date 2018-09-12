// setInterval (function(){
//     try {
//         throw new error('try error');
        
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
// })
function getconnection(callback){
var connection;
try {
    throw new error('try error')
    callback(null,connection)
}
catch(error){
    callback(error,null)
    console.log(error.message);
}
}
getconnection (function (error,connection){
    if (error)
    {
        console.log('error',error.message);
        
    }
    else {
        console.log('connection created succesfully',connection);
        
    }
})