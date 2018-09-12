
    setInterval (function(){
        try {
        console.log('error handeling:');
        throw new error('error occured')
        }

catch(error)
{
console.log('error is handeled in catch');
console.log(error.message);
}
},1000);

