var fs = require('fs');
// write
fs.writeFileSync('test.txt', 'Hello fs!');
// read
console.log(fs.readFileSync('test.txt').toString());
console.log(fs.readFileSync('foo.js').toString());

try
{
    fs.unlinkSync('./test.txt');
    console.log('succesfully addded');
    throw new error('file is not deleted from');    
}
catch(e)
{
    console.log('the error is :',e.message);
}
var fs = require('fs');
fs.unlink('./test.txt', function (err) {
if (err) {
console.log('Error:', err);
}
else {
console.log('test.txt successfully deleted');
}
});