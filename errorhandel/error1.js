try{
    console.log('error is occur');
    throw new Error('error throw');
}
catch(e) {
console.log('caught the error :');
console.log('error is catch now :',e.message);
}
finally{
    console.log('i will execute on irrespectively of an error throw');
}