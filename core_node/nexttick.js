 //nettick is used for callback fuction 
 process.nextTick(function(){
     console.log('next tick');
 })
 console.log('immediate');
 