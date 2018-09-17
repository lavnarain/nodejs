//path normalizing 
var path =require('path')
// Fixes up .. and .
// logs on Unix: /foo
// logs on Windows: \foo
console.log(path.normalize('../foo./bar'));
console.log(path.normalize('/foo//bar//bar//bar/bas'));

//path join
console.log(path.join('/foo','//bar','bas'));

var completePath='./core_node/path.js'

// path dirname
console.log(path.dirname(completePath));
console.log(path.basename(completePath));
console.log(path.extname(completePath));