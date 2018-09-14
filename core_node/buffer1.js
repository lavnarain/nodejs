var str="hello Buffer world "
// string to buffer 
var buffer =new Buffer(str,'utf-8')
console.log(buffer)
// var buffer1 =new Buffer(str,'utf-16')
// console.log(buffer1)
//buffer to string 
var roundTrip=buffer.toString('utf-8')
console.log(roundTrip);
// var roundTrip1=buffer.toString('utf-16')
// console.log(roundTrip1);
