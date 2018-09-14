var count =0;
var intervalObject=setInterval(function(){
count++
console.log('count value:',count);
if (count==5){
console.log('exist');
clearInterval(intervalObject)
}
},1000)


// var count = 0;
// var intervalObject = setInterval(function () {
// count++;
// console.log(count, 'seconds passed');
// if (count == 5) {
// console.log('exiting');
// clearInterval(intervalObject);
// }
// }, 1000);

console.log(__dirname);
console.log(__filename);
console.log(process.timer2);


