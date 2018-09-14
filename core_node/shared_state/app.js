var foo=require('../shared_state/foo')
console.log('initial something:',foo.something );
foo.something=456;
var bas =require('../shared_state/bar')
