
function longRunningOperation(callback){
setTimeout(callback,3000)
}
function userClicked(){
console.log('staring')
	console.log("")
	longRunningOperation(function(){
	console.log('ending a long operation')})
}
userClicked();
