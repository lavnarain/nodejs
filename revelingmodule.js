function printFunction()
{
    console.log('hello');
    var message='hi'
    function setMessage(newmessage)
    {
        if(newmessage)
        throw new error ('can notset empty')
        message=newmessage;
       // console.log(message);
    }
    function getmessage(){
        return message;
    }
    function printMessage(){
        console.log(message);
    }
    return {
        setMessage:setMessage,
        getmessage:getmessage,
        printMessage:printMessage,
    }
    
}
var calling = printFunction()
calling.printMessage();

var calling2=printFunction()
calling2.setMessage();
calling2.getmessage();
calling2.printMessage();

calling.printMessage();

